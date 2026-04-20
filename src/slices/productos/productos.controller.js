const service = require('./productos.service');

exports.getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10, search, categoria, proveedor, stockBajo } = req.query;
        const result = await service.getProductos({ page, limit, search, categoria, proveedor, stockBajo });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDeleted = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await service.getDeletedProductos({ page, limit });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const producto = await service.getProductoById(req.params.id);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevo = await service.createProducto(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const messages = error.errors.map(e => e.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'El SKU ingresado ya existe. Por favor use otro.' });
        }
        if (error.message.includes('precio de venta') || error.message.includes('precio de compra')) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error interno del servidor al crear el producto.' });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await service.updateProducto(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(actualizado);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'El SKU ingresado ya existe. Por favor use otro.' });
        }
        if (error.message.includes('precio de venta')) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error interno del servidor al actualizar el producto.' });
    }
};

exports.softDelete = async (req, res) => {
    try {
        const eliminado = await service.softDeleteProducto(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.restore = async (req, res) => {
    try {
        const restaurado = await service.restoreProducto(req.params.id);
        if (!restaurado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto restaurado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFilterData = async (req, res) => {
    try {
        const data = await service.getFilterData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};