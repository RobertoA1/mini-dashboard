const service = require('./proveedores.service');

exports.getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await service.getProveedores({ page, limit });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDeleted = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await service.getDeletedProveedores({ page, limit });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllWithoutPagination = async (req, res) => {
    try {
        const proveedores = await service.getAllProveedores();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const proveedor = await service.getProveedorById(req.params.id);
        if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevo = await service.createProveedor(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: error.errors.map(e => e.message).join(', ') });
        }
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await service.updateProveedor(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.softDelete = async (req, res) => {
    try {
        const eliminado = await service.softDeleteProveedor(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.restore = async (req, res) => {
    try {
        const restaurado = await service.restoreProveedor(req.params.id);
        if (!restaurado) return res.status(404).json({ error: 'Proveedor no encontrado' });
        res.json({ message: 'Proveedor restaurado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};