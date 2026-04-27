'use strict';

const service = require('./carrito.service');

exports.calculate = async (req, res) => {
    try {
        const { items = [], couponCode = '' } = req.body;
        res.json(await service.calculateCart({ items, couponCode }));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const couponCode = req.query.couponCode || '';
        res.json(await service.getCart(req.user.id, couponCode));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.addItem = async (req, res) => {
    try {
        const { productoId, cantidad = 1, couponCode = '' } = req.body;
        res.status(201).json(await service.addItem(req.user.id, productoId, cantidad, couponCode));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const { cantidad, couponCode = '' } = req.body;
        res.json(await service.updateItem(req.user.id, req.params.productoId, cantidad, couponCode));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.removeItem = async (req, res) => {
    try {
        const couponCode = req.body?.couponCode || '';
        res.json(await service.removeItem(req.user.id, req.params.productoId, couponCode));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.importItems = async (req, res) => {
    try {
        const { items = [], couponCode = '' } = req.body;
        res.status(201).json(await service.importItems(req.user.id, items, couponCode));
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};
