'use strict';
const { sequelize, Orden, OrdenItem, Envio, Pago, CarritoItem, Producto } = require('../../models');
const carritoService = require('../carrito/carrito.service');

exports.placeOrder = async (usuarioId, checkoutData) => {
    const { envio, pago, couponCode } = checkoutData;
    
    const cartSummary = await carritoService.getCart(usuarioId, couponCode);
    
    if (cartSummary.items.length === 0) {
        const error = new Error('El carrito está vacío.');
        error.statusCode = 400;
        throw error;
    }

    const transaction = await sequelize.transaction();
    try {
        for (const item of cartSummary.items) {
            const producto = await Producto.findByPk(item.productoId, { transaction });
            if (!producto || Number(producto.stock_actual) < Number(item.cantidad)) {
                const error = new Error(`Stock insuficiente para el producto: ${item.producto?.nombre || item.productoId}`);
                error.statusCode = 400;
                throw error;
            }
        }

        const igv = cartSummary.total - (cartSummary.total / 1.18);
        
        const orden = await Orden.create({
            usuario_id: usuarioId,
            subtotal: cartSummary.total / 1.18,
            igv: igv,
            descuento_cupon: cartSummary.descuentoCupon,
            costo_envio: cartSummary.subtotalEnvios,
            total: cartSummary.total,
            estado: 'PAGADA',
        }, { transaction });

        for (const item of cartSummary.items) {
            await OrdenItem.create({
                orden_id: orden.id,
                producto_id: item.productoId,
                cantidad: item.cantidad,
                precio_unitario: item.producto.precio_descuento,
                subtotal: item.subtotal,
            }, { transaction });

            await Producto.decrement('stock_actual', {
                by: Number(item.cantidad),
                where: { id: item.productoId },
                transaction,
            });
            await Producto.increment('cantidad_vendidos', {
                by: Number(item.cantidad),
                where: { id: item.productoId },
                transaction,
            });
        }

        await Envio.create({
            orden_id: orden.id,
            nombre_completo: envio.nombre_completo,
            email: envio.email,
            telefono: envio.telefono,
            pais: envio.pais,
            region: envio.region,
            ciudad: envio.ciudad,
            codigo_postal: envio.codigo_postal,
            direccion: envio.direccion,
            numero: envio.numero,
            apartamento: envio.apartamento || '',
            metodo_envio: envio.metodo_envio || 'estándar',
        }, { transaction });

        await Pago.create({
            orden_id: orden.id,
            metodo_pago: pago.metodo_pago,
            estado_pago: 'PAGADO',
        }, { transaction });

        await CarritoItem.destroy({ where: { usuario_id: usuarioId }, transaction });

        await transaction.commit();
        
        return { success: true, ordenId: orden.id };
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
};
