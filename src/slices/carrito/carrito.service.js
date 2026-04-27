'use strict';

const { CarritoItem, Producto, Categoria, ProductImage } = require('../../models');
const { roundMoney, getEffectivePrice, getShippingCost, toNumber } = require('../../utils/storefront-pricing');
const { validateCoupon } = require('../cupones/cupones.service');

const includeProducto = [
    {
        model: Producto,
        as: 'producto',
        include: [
            { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
            { model: ProductImage, as: 'imagenes' },
        ],
    },
];

const normalizeItems = (items = []) => {
    const aggregated = new Map();

    for (const item of items) {
        const productoId = Number(item.productoId ?? item.producto_id);
        const cantidad = Math.max(Number(item.cantidad ?? item.quantity ?? 1), 1);
        if (!productoId) continue;

        aggregated.set(productoId, (aggregated.get(productoId) || 0) + cantidad);
    }

    return [...aggregated.entries()].map(([productoId, cantidad]) => ({ productoId, cantidad }));
};

const calculateSummary = async (items = [], couponCode = '') => {
    const normalizedItems = normalizeItems(items);
    if (!normalizedItems.length) {
        return {
            items: [],
            totalItems: 0,
            subtotalProductos: 0,
            subtotalEnvios: 0,
            descuentoCupon: 0,
            cupon: null,
            total: 0,
        };
    }

    const productIds = normalizedItems.map((item) => item.productoId);
    const products = await Producto.findAll({
        where: {
            id: productIds,
            fecha_eliminacion: null,
        },
        include: [
            { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
            { model: ProductImage, as: 'imagenes' },
        ],
    });

    const byId = new Map(products.map((product) => [Number(product.id), product]));

    const lineItems = normalizedItems
        .map((item) => {
            const product = byId.get(Number(item.productoId));
            if (!product) return null;

            const basePrice = roundMoney(product.precio_venta);
            const effectivePrice = roundMoney(getEffectivePrice(product));
            const shippingCost = roundMoney(getShippingCost(product));
            const lineSubtotal = roundMoney(effectivePrice * item.cantidad);

            const imagenPrincipal = product.imagenes?.find(img => img.orden === 0) 
                || product.imagenes?.sort((a, b) => a.orden - b.orden)[0]
                || null;

            return {
                productoId: Number(product.id),
                cantidad: item.cantidad,
                producto: {
                    id: product.id,
                    sku: product.sku,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    precio_venta: basePrice,
                    descuento_tipo: product.descuento_tipo,
                    descuento_valor: roundMoney(product.descuento_valor),
                    descuento_monto: roundMoney(basePrice - effectivePrice),
                    precio_descuento: effectivePrice,
                    cuotas_sin_interes: Boolean(product.cuotas_sin_interes),
                    cuotas_mensual: product.cuotas_sin_interes ? roundMoney(effectivePrice / 12) : 0,
                    envio_gratis: Boolean(product.envio_gratis),
                    costo_envio: shippingCost,
                    categoria: product.categoriaRel ? { id: product.categoriaRel.id, nombre: product.categoriaRel.nombre } : null,
                    disponible: Number(product.stock_actual) > 0,
                    stock_actual: Number(product.stock_actual),
                    imagen: imagenPrincipal?.url || null,
                },
                subtotal: lineSubtotal,
                subtotalProducto: lineSubtotal,
                subtotalEnvio: shippingCost,
                totalLinea: roundMoney(lineSubtotal + shippingCost),
            };
        })
        .filter(Boolean);

    const subtotalProductos = lineItems.reduce((acc, item) => acc + toNumber(item.subtotalProducto), 0);
    const subtotalEnvios = lineItems.reduce((acc, item) => acc + toNumber(item.subtotalEnvio), 0);
    const totalBeforeCoupon = roundMoney(subtotalProductos + subtotalEnvios);

    let couponResult = null;
    let descuentoCupon = 0;
    if (couponCode) {
        const coupon = await validateCoupon(couponCode, totalBeforeCoupon);
        couponResult = coupon.coupon;
        descuentoCupon = roundMoney(coupon.discount);
    }

    return {
        items: lineItems,
        totalItems: lineItems.reduce((acc, item) => acc + Number(item.cantidad), 0),
        subtotalProductos: roundMoney(subtotalProductos),
        subtotalEnvios: roundMoney(subtotalEnvios),
        descuentoCupon,
        cupon: couponResult,
        total: roundMoney(Math.max(0, totalBeforeCoupon - descuentoCupon)),
    };
};

const getDbItems = async (usuarioId) => {
    const items = await CarritoItem.findAll({
        where: { usuario_id: usuarioId },
        include: includeProducto,
        order: [['fecha_creacion', 'ASC']],
    });

    return items.map((item) => ({
        productoId: Number(item.producto_id),
        cantidad: Number(item.cantidad),
    }));
};

const saveItem = async (usuarioId, productoId, cantidad) => {
    const producto = await Producto.findByPk(productoId);
    if (!producto || producto.fecha_eliminacion) {
        const error = new Error('Producto no encontrado.');
        error.statusCode = 404;
        throw error;
    }

    if (Number(producto.stock_actual) <= 0) {
        const error = new Error('Producto agotado.');
        error.statusCode = 400;
        throw error;
    }

    const items = await CarritoItem.findAll({
        where: { usuario_id: usuarioId, producto_id: productoId }
    });

    const existingQty = items.length > 0 ? Number(items[0].cantidad) : 0;
    if (existingQty + Number(cantidad) > Number(producto.stock_actual)) {
        const error = new Error(`Solo hay ${producto.stock_actual} unidades disponibles.`);
        error.statusCode = 400;
        throw error;
    }

    if (items.length > 0) {
        items[0].cantidad += Number(cantidad);
        await items[0].save();
        for (let i = 1; i < items.length; i++) {
            await items[i].destroy();
        }
    } else {
        try {
            await CarritoItem.create({
                usuario_id: usuarioId,
                producto_id: productoId,
                cantidad: Number(cantidad)
            });
        } catch (err) {
            const existing = await CarritoItem.findOne({ where: { usuario_id: usuarioId, producto_id: productoId }});
            if (existing) {
                existing.cantidad += Number(cantidad);
                await existing.save();
            }
        }
    }
};

exports.calculateCart = async ({ items = [], couponCode = '' }) => {
    return calculateSummary(items, couponCode);
};

exports.getCart = async (usuarioId, couponCode = '') => {
    const items = await getDbItems(usuarioId);
    return calculateSummary(items, couponCode);
};

exports.addItem = async (usuarioId, productoId, cantidad = 1, couponCode = '') => {
    if (!productoId) {
        const error = new Error('El producto es obligatorio.');
        error.statusCode = 400;
        throw error;
    }

    await saveItem(usuarioId, Number(productoId), Number(cantidad));
    return exports.getCart(usuarioId, couponCode);
};

exports.updateItem = async (usuarioId, productoId, cantidad, couponCode = '') => {
    const items = await CarritoItem.findAll({ where: { usuario_id: usuarioId, producto_id: productoId } });
    if (!items.length) {
        const error = new Error('Producto no encontrado en el carrito.');
        error.statusCode = 404;
        throw error;
    }

    if (Number(cantidad) > 0) {
        const producto = await Producto.findByPk(productoId);
        if (!producto || Number(producto.stock_actual) < Number(cantidad)) {
            const error = new Error(`Solo hay ${producto?.stock_actual || 0} unidades disponibles.`);
            error.statusCode = 400;
            throw error;
        }
    }

    if (Number(cantidad) <= 0) {
        for (const item of items) {
            await item.destroy();
        }
    } else {
        items[0].cantidad = Number(cantidad);
        await items[0].save();
        for (let i = 1; i < items.length; i++) {
            await items[i].destroy();
        }
    }

    return exports.getCart(usuarioId, couponCode);
};

exports.removeItem = async (usuarioId, productoId, couponCode = '') => {
    const items = await CarritoItem.findAll({ where: { usuario_id: usuarioId, producto_id: productoId } });
    if (!items.length) {
        const error = new Error('Producto no encontrado en el carrito.');
        error.statusCode = 404;
        throw error;
    }

    for (const item of items) {
        await item.destroy();
    }
    return exports.getCart(usuarioId, couponCode);
};

exports.importItems = async (usuarioId, items = [], couponCode = '') => {
    for (const item of normalizeItems(items)) {
        const existing = await CarritoItem.findOne({ where: { usuario_id: usuarioId, producto_id: item.productoId } });
        if (existing) {
            existing.cantidad += item.cantidad;
            await existing.save();
        } else {
            await CarritoItem.create({
                usuario_id: usuarioId,
                producto_id: item.productoId,
                cantidad: item.cantidad,
            });
        }
    }

    return exports.getCart(usuarioId, couponCode);
};
