'use strict';
const service = require('./checkout.service');

exports.placeOrder = async (req, res) => {
    try {
        const result = await service.placeOrder(req.user.id, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};
