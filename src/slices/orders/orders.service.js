'use strict';
const { Orden, OrdenItem, Envio, Pago, Producto, ProductImage, Proveedor, Usuario } = require('../../models');
const { Op } = require('sequelize');

// Admin: Obtener orden por ID sin restricción de usuario
exports.getOrderByIdAdmin = async (ordenId) => {
    const orden = await Orden.findOne({
        where: { id: ordenId },
        include: [
            {
                model: OrdenItem,
                as: 'items',
                include: [
                    {
                        model: Producto,
                        as: 'producto',
                        include: [
                            { model: ProductImage, as: 'imagenes' },
                            { model: Proveedor, as: 'proveedorRel' }
                        ]
                    }
                ]
            },
            { model: Envio, as: 'envio' },
            { model: Pago, as: 'pago' }
        ]
    });

    if (!orden) {
        const error = new Error('Orden no encontrada');
        error.statusCode = 404;
        throw error;
    }

    // Formatear imágenes
    const ordenData = orden.toJSON();
    if (ordenData.items) {
        ordenData.items = ordenData.items.map(item => {
            if (item.producto && item.producto.imagenes && item.producto.imagenes.length > 0) {
                const mainImage = item.producto.imagenes.find(img => img.orden === 0) || item.producto.imagenes[0];
                item.producto.imagen = mainImage.url;
            } else if (item.producto) {
                item.producto.imagen = null;
            }
            // Limpiar imagenes del DTO para no mandar demasiados datos
            if (item.producto) {
                delete item.producto.imagenes;
            }
            return item;
        });
    }

    return ordenData;
};

// Usuario: Obtener su propia orden por ID
exports.getOrderById = async (usuarioId, ordenId) => {
    const orden = await Orden.findOne({
        where: { id: ordenId, usuario_id: usuarioId },
        include: [
            {
                model: OrdenItem,
                as: 'items',
                include: [
                    {
                        model: Producto,
                        as: 'producto',
                        include: [
                            { model: ProductImage, as: 'imagenes' },
                            { model: Proveedor, as: 'proveedorRel' }
                        ]
                    }
                ]
            },
            { model: Envio, as: 'envio' },
            { model: Pago, as: 'pago' }
        ]
    });

    if (!orden) {
        const error = new Error('Orden no encontrada');
        error.statusCode = 404;
        throw error;
    }

    // Formatear imágenes
    const ordenData = orden.toJSON();
    if (ordenData.items) {
        ordenData.items = ordenData.items.map(item => {
            if (item.producto && item.producto.imagenes && item.producto.imagenes.length > 0) {
                const mainImage = item.producto.imagenes.find(img => img.orden === 0) || item.producto.imagenes[0];
                item.producto.imagen = mainImage.url;
            } else if (item.producto) {
                item.producto.imagen = null;
            }
            if (item.producto) {
                delete item.producto.imagenes;
            }
            return item;
        });
    }

    return ordenData;
};

exports.getUserOrders = async (usuarioId) => {
    try {
        const ordenes = await Orden.findAll({
            where: { usuario_id: usuarioId },
            include: [
                {
                    model: OrdenItem,
                    as: 'items',
                    include: [
                        {
                            model: Producto,
                            as: 'producto',
                            include: [
                                { model: ProductImage, as: 'imagenes' },
                                { model: Proveedor, as: 'proveedorRel' }
                            ]
                        }
                    ]
                },
                { model: Pago, as: 'pago' }
            ],
            order: [['fecha_creacion', 'DESC']]
        });

        return ordenes.map(orden => {
            const ordenData = orden.toJSON();
            if (ordenData.items) {
                ordenData.items = ordenData.items.map(item => {
                    if (item.producto && item.producto.imagenes && item.producto.imagenes.length > 0) {
                        const mainImage = item.producto.imagenes.find(img => img.orden === 0) || item.producto.imagenes[0];
                        item.producto.imagen = mainImage.url;
                    } else if (item.producto) {
                        item.producto.imagen = null;
                    }
                    if (item.producto) {
                        delete item.producto.imagenes;
                    }
                    return item;
                });
            }
            return ordenData;
        });
    } catch (error) {
        console.error('Error in getUserOrders:', error);
        throw error;
    }
};

// Admin: Obtener todas las órdenes con filtros
exports.getAllOrders = async ({ estado, page = 1, limit = 20 }) => {
    const where = {};
    
    if (estado && estado !== 'TODOS') {
        where.estado = estado;
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await Orden.findAndCountAll({
        where,
        include: [
            {
                model: Usuario,
                as: 'usuario',
                attributes: ['id', 'nombre', 'apellido', 'correo']
            },
            {
                model: OrdenItem,
                as: 'items',
                include: [
                    {
                        model: Producto,
                        as: 'producto',
                        attributes: ['id', 'nombre', 'sku']
                    }
                ]
            },
            { model: Envio, as: 'envio', attributes: ['metodo_envio'] },
            { model: Pago, as: 'pago', attributes: ['metodo_pago', 'estado_pago'] }
        ],
        order: [['fecha_creacion', 'DESC']],
        limit: parseInt(limit),
        offset: parseInt(offset),
        distinct: true
    });

    return {
        total: count,
        page: parseInt(page),
        totalPages: Math.ceil(count / limit),
        ordenes: rows
    };
};
