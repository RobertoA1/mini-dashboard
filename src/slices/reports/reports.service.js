const { Producto, Categoria } = require('../../models');
const dashboardService = require('../dashboard/dashboard.service');

exports.getProductosForReport = async (categoriaId) => {
    const where = { fecha_eliminacion: null };
    if (categoriaId) where.categoria = categoriaId;
    const productos = await Producto.findAll({
        where,
        include: [{ model: Categoria, as: 'categoriaRel', attributes: ['nombre'] }],
        order: [['nombre', 'ASC']],
    });
    return productos;
};

exports.getManagementData = async () => {
    const kpis = await dashboardService.getKPIs();
    const productos = await Producto.findAll({
        where: { fecha_eliminacion: null },
        include: [
            { model: Categoria, as: 'categoriaRel', attributes: ['nombre'] },
            { model: require('../../models').Proveedor, as: 'proveedorRel', attributes: ['nombre'] }
        ],
        order: [['nombre', 'ASC']],
    });
    return { kpis, productos };
};