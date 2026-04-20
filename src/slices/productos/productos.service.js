const { Producto, Categoria, Proveedor, sequelize } = require('../../models');
const { Op } = require('sequelize');

exports.getProductos = async ({ page, limit, search, categoria, proveedor, stockBajo }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: null };

    if (search) {
        where[Op.or] = [
            { nombre: { [Op.iLike]: `%${search}%` } },
            { sku: { [Op.iLike]: `%${search}%` } },
        ];
    }
    if (categoria) where.categoria = categoria;
    if (proveedor) where.proveedor = proveedor;

    if (stockBajo === 'true') {
        // Método 1: usando sequelize.literal dentro de Op.and como array
        where[Op.and] = [
            sequelize.literal('stock_actual < stock_minimo')
        ];
        // Alternativa (si la anterior falla, probar con):
        // where[Op.and] = sequelize.where(sequelize.col('stock_actual'), '<', sequelize.col('stock_minimo'));
    }

    try {
        const { count, rows } = await Producto.findAndCountAll({
            where,
            include: [
                { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
                { model: Proveedor, as: 'proveedorRel', attributes: ['id', 'nombre'] },
            ],
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [['nombre', 'ASC']],
        });

        return {
            total: count,
            page: parseInt(page),
            totalPages: Math.ceil(count / limit),
            data: rows,
        };
    } catch (error) {
        console.error('Error en getProductos:', error);
        throw error;
    }
};

exports.getDeletedProductos = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: { [Op.ne]: null } };
    const { count, rows } = await Producto.findAndCountAll({
        where,
        include: ['categoriaRel', 'proveedorRel'],
        limit,
        offset,
        paranoid: false,
    });
    return { total: count, page, totalPages: Math.ceil(count / limit), data: rows };
};

exports.getProductoById = (id) => {
    return Producto.findByPk(id, { include: ['categoriaRel', 'proveedorRel'] });
};

exports.createProducto = async (data) => {
    if (parseFloat(data.precio_venta) <= parseFloat(data.precio_compra)) {
        throw new Error('El precio de venta debe ser mayor al precio de compra.');
    }
    return Producto.create(data);
};

exports.updateProducto = async (id, data) => {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    if (data.precio_venta && data.precio_compra) {
        if (parseFloat(data.precio_venta) <= parseFloat(data.precio_compra)) {
            throw new Error('El precio de venta debe ser mayor al precio de compra.');
        }
    }
    return producto.update(data);
};

exports.softDeleteProducto = async (id) => {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    await producto.destroy();
    return producto;
};

exports.restoreProducto = async (id) => {
    const producto = await Producto.findByPk(id, { paranoid: false });
    if (!producto) return null;
    await producto.restore();
    return producto;
};

exports.getFilterData = async () => {
    const categorias = await Categoria.findAll({ where: { fecha_eliminacion: null }, attributes: ['id', 'nombre'] });
    const proveedores = await Proveedor.findAll({ where: { fecha_eliminacion: null }, attributes: ['id', 'nombre'] });
    return { categorias, proveedores };
};