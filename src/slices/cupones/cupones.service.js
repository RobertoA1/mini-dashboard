'use strict';

const { Op } = require('sequelize');
const { Cupon } = require('../../models');
const { roundMoney, toNumber } = require('../../utils/storefront-pricing');

const isActiveByDate = (coupon) => {
    const now = new Date();
    if (coupon.fecha_inicio && new Date(coupon.fecha_inicio) > now) return false;
    if (coupon.fecha_fin && new Date(coupon.fecha_fin) < now) return false;
    return true;
};

const buildCoupon = (coupon) => ({
    codigo: coupon.codigo,
    tipo: coupon.tipo,
    valor: roundMoney(coupon.valor),
});

exports.findByCode = async (codigo) => {
    if (!codigo) return null;

    const coupon = await Cupon.findOne({
        where: {
            codigo: { [Op.iLike]: codigo.trim() },
            activo: true,
            fecha_eliminacion: null,
        },
    });

    if (!coupon || !isActiveByDate(coupon)) {
        return null;
    }

    return coupon;
};

exports.validateCoupon = async (codigo, amount = 0) => {
    const coupon = await exports.findByCode(codigo);
    if (!coupon) {
        const error = new Error('Cupón inválido o vencido.');
        error.statusCode = 400;
        throw error;
    }

    const baseAmount = Math.max(toNumber(amount), 0);
    const value = roundMoney(coupon.valor);
    const discount = coupon.tipo === 'porcentaje'
        ? roundMoney(baseAmount * (value / 100))
        : Math.min(roundMoney(value), baseAmount);

    return {
        coupon: buildCoupon(coupon),
        discount,
    };
};

exports.getCouponOfTheDay = async () => {
    const coupon = await Cupon.findOne({
        where: {
            es_del_dia: true,
            activo: true,
            fecha_eliminacion: null,
        },
    });

    if (!coupon || !isActiveByDate(coupon)) {
        return null;
    }

    return {
        codigo: coupon.codigo,
        tipo: coupon.tipo,
        valor: roundMoney(coupon.valor),
    };
};

exports.getActiveCoupons = async () => {
    const now = new Date();
    const coupons = await Cupon.findAll({
        where: {
            activo: true,
            fecha_eliminacion: null,
            [Op.and]: [
                {
                    [Op.or]: [
                        { fecha_inicio: null },
                        { fecha_inicio: { [Op.lte]: now } }
                    ]
                },
                {
                    [Op.or]: [
                        { fecha_fin: null },
                        { fecha_fin: { [Op.gte]: now } }
                    ]
                }
            ]
        },
        order: [['fecha_creacion', 'DESC']]
    });

    return coupons.map(c => ({
        codigo: c.codigo,
        descripcion: c.descripcion || 'Descuento especial',
        tipo: c.tipo,
        valor: roundMoney(c.valor),
        fechaInicio: c.fecha_inicio,
        fechaFin: c.fecha_fin
    }));
};
