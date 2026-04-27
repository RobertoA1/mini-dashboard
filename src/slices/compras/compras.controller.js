'use strict';

const service = require('./compras.service');

exports.create = async (req, res) => {
    try {
        const { productoId, cantidad = 1 } = req.body;
        const compra = await service.createPurchase(req.user.id, productoId, cantidad);
        res.status(201).json({ compra });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.list = async (req, res) => {
    try {
        const compras = await service.getPurchases(req.user.id);
        res.json({ compras });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.get = async (req, res) => {
    try {
        const compra = await service.getPurchaseById(req.params.id, req.user.id);
        res.json({ compra });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};