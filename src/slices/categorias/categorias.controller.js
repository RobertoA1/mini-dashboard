const service = require('./categorias.service');

exports.getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await service.getCategorias({ page, limit });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDeleted = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await service.getDeletedCategorias({ page, limit });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllWithoutPagination = async (req, res) => {
    try {
        const categorias = await service.getAllCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const categoria = await service.getCategoriaById(req.params.id);
        if (!categoria) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const nueva = await service.createCategoria(req.body);
        res.status(201).json(nueva);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'El nombre de la categoría ya existe.' });
        }
        if (error.name === 'SequelizeValidationError') {
            const messages = error.errors.map(e => e.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        res.status(500).json({ error: 'Error interno del servidor al crear la categoría.' });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizada = await service.updateCategoria(req.params.id, req.body);
        if (!actualizada) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json(actualizada);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'El nombre de la categoría ya existe.' });
        }
        res.status(500).json({ error: 'Error interno del servidor al actualizar la categoría.' });
    }
};

exports.softDelete = async (req, res) => {
    try {
        const eliminada = await service.softDeleteCategoria(req.params.id);
        if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.restore = async (req, res) => {
    try {
        const restaurada = await service.restoreCategoria(req.params.id);
        if (!restaurada) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json({ message: 'Categoría restaurada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};