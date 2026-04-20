const { Categoria } = require('../../models');
const { Op } = require('sequelize');

exports.getCategorias = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: null };
    const { count, rows } = await Categoria.findAndCountAll({
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

exports.getDeletedCategorias = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: { [Op.ne]: null } };
    const { count, rows } = await Categoria.findAndCountAll({
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

exports.getAllCategorias = async () => {
    return Categoria.findAll({
        where: { fecha_eliminacion: null },
        attributes: ['id', 'nombre'],
        order: [['nombre', 'ASC']],
    });
};

exports.getCategoriaById = (id) => {
    return Categoria.findByPk(id);
};

exports.createCategoria = (data) => {
    return Categoria.create(data);
};

exports.updateCategoria = async (id, data) => {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) return null;
    return categoria.update(data);
};

exports.softDeleteCategoria = async (id) => {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) return null;
    await categoria.destroy();
    return categoria;
};

exports.restoreCategoria = async (id) => {
    const categoria = await Categoria.findByPk(id, { paranoid: false });
    if (!categoria) return null;
    await categoria.restore();
    return categoria;
};