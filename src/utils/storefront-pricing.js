'use strict';

const toNumber = (value) => {
    const parsed = Number(value ?? 0);
    return Number.isFinite(parsed) ? parsed : 0;
};

const roundMoney = (value) => Math.round(toNumber(value) * 100) / 100;

const getDiscountAmount = (product) => {
    const base = toNumber(product.precio_venta);
    const type = product.descuento_tipo;
    const value = toNumber(product.descuento_valor);

    if (!type || value <= 0) {
        return 0;
    }

    if (type === 'porcentaje') {
        return Math.min(base, roundMoney(base * (value / 100)));
    }

    return Math.min(roundMoney(value), base);
};

const getEffectivePrice = (product) => roundMoney(Math.max(0, toNumber(product.precio_venta) - getDiscountAmount(product)));

const getMonthlyInstallment = (product) => {
    if (!product.cuotas_sin_interes) {
        return 0;
    }

    return roundMoney(getEffectivePrice(product) / 12);
};

const getShippingCost = (product) => {
    if (product.envio_gratis) {
        return 0;
    }

    return 12.00;
};

const buildStorefrontProduct = (product) => {
    const discountAmount = getDiscountAmount(product);
    const effectivePrice = getEffectivePrice(product);
    const monthlyInstallment = getMonthlyInstallment(product);
    const shippingCost = getShippingCost(product);

    const imagenPrincipal = product.imagenes?.find(img => img.orden === 0) 
        || product.imagenes?.sort((a, b) => a.orden - b.orden)[0]
        || null;

    return {
        id: product.id,
        sku: product.sku,
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio_venta: roundMoney(product.precio_venta),
        descuento_tipo: product.descuento_tipo,
        descuento_valor: roundMoney(product.descuento_valor),
        descuento_monto: discountAmount,
        precio_descuento: effectivePrice,
        cuotas_sin_interes: Boolean(product.cuotas_sin_interes),
        cuotas_mensual: monthlyInstallment,
        envio_gratis: Boolean(product.envio_gratis),
        costo_envio: shippingCost,
        categoria: product.categoriaRel
            ? { id: product.categoriaRel.id, nombre: product.categoriaRel.nombre }
            : null,
        imagen: imagenPrincipal?.url || null,
    };
};

module.exports = {
    toNumber,
    roundMoney,
    getDiscountAmount,
    getEffectivePrice,
    getMonthlyInstallment,
    getShippingCost,
    buildStorefrontProduct,
};
