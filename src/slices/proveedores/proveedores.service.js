const { Proveedor } = require('../../models');
const { Op } = require('sequelize');

exports.getProveedores = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: null };
    const { count, rows } = await Proveedor.findAndCountAll({
        where,
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
};

exports.getDeletedProveedores = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: { [Op.ne]: null } };
    const { count, rows } = await Proveedor.findAndCountAll({
        where,
        limit: parseInt(limit),
        offset: parseInt(offset),
        paranoid: false,
        order: [['fecha_eliminacion', 'DESC']],
    });
    return {
        total: count,
        page: parseInt(page),
        totalPages: Math.ceil(count / limit),
        data: rows,
    };
};

exports.getAllProveedores = async () => {
    return Proveedor.findAll({
        where: { fecha_eliminacion: null },
        attributes: ['id', 'nombre'],
        order: [['nombre', 'ASC']],
    });
};

exports.getProveedorById = (id) => {
    return Proveedor.findByPk(id);
};

exports.createProveedor = async (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.correo)) {
        throw new Error('El correo electrónico no es válido.');
    }
    if (!data.telefono || data.telefono.trim() === '') {
        throw new Error('El teléfono es obligatorio.');
    }
    return Proveedor.create(data);
};

exports.updateProveedor = async (id, data) => {
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) return null;
    if (data.correo) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.correo)) {
            throw new Error('El correo electrónico no es válido.');
        }
    }
    return proveedor.update(data);
};

exports.softDeleteProveedor = async (id) => {
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) return null;
    await proveedor.destroy();
    return proveedor;
};

exports.restoreProveedor = async (id) => {
    const proveedor = await Proveedor.findByPk(id, { paranoid: false });
    if (!proveedor) return null;
    await proveedor.restore();
    return proveedor;
};