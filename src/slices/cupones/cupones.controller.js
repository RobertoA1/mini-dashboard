'use strict';

const service = require('./cupones.service');

exports.validate = async (req, res) => {
    try {
        const { codigo, monto = 0 } = req.body;
        const result = await service.validateCoupon(codigo, monto);
        res.json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.getCouponOfTheDay = async (req, res) => {
    try {
        const coupon = await service.getCouponOfTheDay();
        res.json({ coupon });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.getActiveCoupons = async (req, res) => {
    try {
        const coupons = await service.getActiveCoupons();
        res.json({ coupons });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};
