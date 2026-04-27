'use strict';
const service = require('./orders.service');

exports.getOrderById = async (req, res) => {
    try {
        const orden = await service.getOrderById(req.user.id, req.params.id);
        res.json(orden);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const ordenes = await service.getUserOrders(req.user.id);
        res.json({ ordenes });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

// Admin: Obtener todas las órdenes con filtros
exports.getAllOrders = async (req, res) => {
    try {
        const { estado, nombre, apellido, fechaDesde, fechaHasta, page, limit } = req.query;
        const result = await service.getAllOrders({ 
            estado, 
            nombre, 
            apellido, 
            fechaDesde, 
            fechaHasta,
            page, 
            limit 
        });
        res.json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

// Admin: Obtener orden por ID
exports.getOrderByIdAdmin = async (req, res) => {
    try {
        const orden = await service.getOrderByIdAdmin(req.params.id);
        res.json(orden);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};
