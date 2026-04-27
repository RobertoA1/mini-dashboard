'use strict';

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

exports.getPublicCatalog = async (req, res) => {
    try {
        const { page = 1, limit = 12, search, categoria } = req.query;
        const result = await service.getPublicCatalog({ page, limit, search, categoria });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPublicById = async (req, res) => {
    try {
        const result = await service.getPublicProductoById(req.params.id);
        if (!result) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFeatured = async (req, res) => {
    try {
        const result = await service.getFeaturedProducts();
        res.json({ productos: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ============ Controladores de Imágenes ============
exports.addImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { url, tipo, orden } = req.body;
        const result = await service.addProductImage(id, { url, tipo, orden });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteImage = async (req, res) => {
    try {
        const { imageId } = req.params;
        const result = await service.deleteProductImage(imageId);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.setMainImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { imageId } = req.body;
        const result = await service.setMainImage(id, imageId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ============ Controladores de Atributos ============
exports.addAttribute = async (req, res) => {
    try {
        const { id } = req.params;
        const { clave, valor, orden } = req.body;
        const result = await service.addProductAttribute(id, { clave, valor, orden });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAttribute = async (req, res) => {
    try {
        const { attributeId } = req.params;
        const { clave, valor, orden } = req.body;
        const result = await service.updateProductAttribute(attributeId, { clave, valor, orden });
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteAttribute = async (req, res) => {
    try {
        const { attributeId } = req.params;
        const result = await service.deleteProductAttribute(attributeId);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
