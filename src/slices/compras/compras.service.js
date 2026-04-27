'use strict';

const { Compra, Producto, CarritoItem } = require('../../models');

exports.createPurchase = async (userId, productoId, cantidad = 1) => {
    const producto = await Producto.findByPk(productoId);
    if (!producto) {
        const error = new Error('Producto no encontrado');
        error.statusCode = 404;
        throw error;
    }

    if (producto.stock_actual < cantidad) {
        const error = new Error('Stock insuficiente');
        error.statusCode = 400;
        throw error;
    }

    const compra = await Compra.create({
        usuario_id: userId,
        producto_id: productoId,
        nombre_producto: producto.nombre,
        imagen_producto: null,
        descripcion_producto: producto.descripcion,
        precio: producto.precio_venta,
        cantidad,
        fecha_compra: new Date(),
    });

    producto.stock_actual = parseFloat(producto.stock_actual) - cantidad;
    await producto.save();

    await CarritoItem.destroy({
        where: { usuario_id: userId, producto_id: productoId },
    });

    return compra;
};

exports.getPurchases = async (userId) => {
    const compras = await Compra.findAll({
        where: { usuario_id: userId },
        order: [['fecha_compra', 'DESC']],
    });

    return compras.map(c => ({
        id: c.id,
        productoId: c.producto_id,
        nombre: c.nombre_producto,
        descripcion: c.descripcion_producto,
        imagen: c.imagen_producto,
        precio: c.precio,
        cantidad: c.cantidad,
        fechaCompra: c.fecha_compra,
    }));
};

exports.getPurchaseById = async (purchaseId, userId) => {
    const compra = await Compra.findOne({
        where: { id: purchaseId, usuario_id: userId },
    });

    if (!compra) {
        const error = new Error('Compra no encontrada');
        error.statusCode = 404;
        throw error;
    }

    return {
        id: compra.id,
        productoId: compra.producto_id,
        nombre: compra.nombre_producto,
        descripcion: compra.descripcion_producto,
        imagen: compra.imagen_producto,
        precio: compra.precio,
        cantidad: compra.cantidad,
        fechaCompra: compra.fecha_compra,
    };
};