'use strict';

const { Producto, Categoria, Proveedor, sequelize, ProductImage, ProductAttribute } = require('../../models');
const { Op } = require('sequelize');
const {
    buildStorefrontProduct,
    getDiscountAmount,
    getEffectivePrice,
    getMonthlyInstallment,
    getShippingCost,
    roundMoney,
    toNumber,
} = require('../../utils/storefront-pricing');

const publicInclude = [
    { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
    { model: Proveedor, as: 'proveedorRel', attributes: ['id', 'nombre'] },
    { model: ProductImage, as: 'imagenes', attributes: ['id', 'url', 'tipo', 'orden'], required: false },
    { model: ProductAttribute, as: 'atributos', attributes: ['id', 'clave', 'valor', 'orden'], required: false },
];

const adminInclude = [
    { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
    { model: Proveedor, as: 'proveedorRel', attributes: ['id', 'nombre'] },
];

const withStorefrontFields = (product) => {
    if (!product) return null;

    const plain = typeof product.get === 'function' ? product.get({ plain: true }) : product;
    const storefront = buildStorefrontProduct(plain);
    const proveedor = plain.proveedorRel ? { id: plain.proveedorRel.id, nombre: plain.proveedorRel.nombre } : null;

    return {
        ...storefront,
        disponible: Number(plain.stock_actual) > 0,
        stock_actual: Number(plain.stock_actual),
        precio_descuento: roundMoney(getEffectivePrice(plain)),
        descuento_monto: roundMoney(getDiscountAmount(plain)),
        cuotas_mensual: roundMoney(getMonthlyInstallment(plain)),
        costo_envio: roundMoney(getShippingCost(plain)),
        proveedor,
        estado: plain.estado || 'Nuevo',
    };
};

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
        where[Op.and] = [
            sequelize.literal('stock_actual < stock_minimo')
        ];
    }

    const { count, rows } = await Producto.findAndCountAll({
        where,
        include: adminInclude,
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

exports.getDeletedProductos = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: { [Op.ne]: null } };
    const { count, rows } = await Producto.findAndCountAll({
        where,
        include: adminInclude,
        limit: parseInt(limit),
        offset: parseInt(offset),
        paranoid: false,
        order: [['fecha_eliminacion', 'DESC']],
    });
    return { total: count, page: parseInt(page), totalPages: Math.ceil(count / limit), data: rows };
};

exports.getProductoById = (id) => {
    return Producto.findByPk(id, {
        include: [
            { model: Categoria, as: 'categoriaRel', attributes: ['id', 'nombre'] },
            { model: Proveedor, as: 'proveedorRel', attributes: ['id', 'nombre'] },
            { model: ProductImage, as: 'imagenes', attributes: ['id', 'url', 'tipo', 'orden'], required: false },
            { model: ProductAttribute, as: 'atributos', attributes: ['id', 'clave', 'valor', 'orden'], required: false },
        ]
    });
};

exports.createProducto = async (data) => {
    if (parseFloat(data.precio_venta) <= parseFloat(data.precio_compra)) {
        throw new Error('El precio de venta debe ser mayor al precio de compra.');
    }
    if (data.descuento_tipo && !['porcentaje', 'monto'].includes(data.descuento_tipo)) {
        throw new Error('El tipo de descuento no es válido.');
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
    if (data.descuento_tipo && !['porcentaje', 'monto'].includes(data.descuento_tipo)) {
        throw new Error('El tipo de descuento no es válido.');
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

exports.getPublicCatalog = async ({ page, limit, search, categoria }) => {
    const offset = (page - 1) * limit;
    const where = { fecha_eliminacion: null };

    if (search) {
        where[Op.or] = [
            { nombre: { [Op.iLike]: `%${search}%` } },
            { sku: { [Op.iLike]: `%${search}%` } },
            { descripcion: { [Op.iLike]: `%${search}%` } },
        ];
    }

    if (categoria) {
        where.categoria = categoria;
    }

    const { count, rows } = await Producto.findAndCountAll({
        where,
        include: publicInclude,
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [['nombre', 'ASC']],
    });

    return {
        total: count,
        page: parseInt(page),
        totalPages: Math.ceil(count / limit),
        data: rows.map(withStorefrontFields),
    };
};

exports.getPublicProductoById = async (id) => {
    const producto = await Producto.findByPk(id, { include: publicInclude });
    if (!producto || producto.fecha_eliminacion) {
        return null;
    }

    const plain = producto.get({ plain: true });
    const product = withStorefrontFields(producto);

    const images = plain.imagenes ? plain.imagenes
        .filter(img => img.tipo === 'detail')
        .sort((a, b) => a.orden - b.orden)
        .map(img => ({ id: img.id, url: img.url, tipo: img.tipo, orden: img.orden })) : [];

    const attributes = plain.atributos ? plain.atributos
        .sort((a, b) => a.orden - b.orden)
        .map(attr => ({ id: attr.id, clave: attr.clave, valor: attr.valor, orden: attr.orden })) : [];

    const related = await Producto.findAll({
        where: {
            id: { [Op.ne]: producto.id },
            categoria: producto.categoria,
            fecha_eliminacion: null,
        },
        include: publicInclude,
        order: [['nombre', 'ASC']],
        limit: 4,
    });

    return {
        product: {
            ...product,
            cantidad_vendidos: plain.cantidad_vendidos || 0,
        },
        images,
        attributes,
        relatedProducts: related.map(withStorefrontFields),
    };
};

exports.getStorefrontProductsByIds = async (items = []) => {
    const ids = items.map((item) => Number(item.productoId)).filter(Boolean);
    if (!ids.length) return [];

    const products = await Producto.findAll({
        where: {
            id: { [Op.in]: ids },
            fecha_eliminacion: null,
        },
        include: publicInclude,
    });

    return products.map(withStorefrontFields);
};

exports.getFeaturedProducts = async (limit = 4) => {
    const products = await Producto.findAll({
        where: {
            fecha_eliminacion: null,
            stock_actual: { [Op.gt]: 0 },
        },
        include: publicInclude,
        order: [['fecha_creacion', 'DESC']],
        limit: parseInt(limit),
    });

    return products.map(withStorefrontFields);
};

// ============ Gestión de Imágenes ============
exports.addProductImage = async (productId, { url, tipo, orden }) => {
    const producto = await Producto.findByPk(productId);
    if (!producto) throw new Error('Producto no encontrado');

    // Validar tipo
    if (!['card', 'detail'].includes(tipo)) {
        throw new Error('Tipo de imagen inválido. Use "card" o "detail"');
    }

    return ProductImage.create({
        product_id: productId,
        url,
        tipo,
        orden: orden || 0
    });
};

exports.deleteProductImage = async (imageId) => {
    const imagen = await ProductImage.findByPk(imageId);
    if (!imagen) throw new Error('Imagen no encontrada');
    await imagen.destroy();
    return { message: 'Imagen eliminada correctamente' };
};

exports.setMainImage = async (productId, imageId) => {
    const producto = await Producto.findByPk(productId);
    if (!producto) throw new Error('Producto no encontrado');

    const imagen = await ProductImage.findOne({
        where: { id: imageId, product_id: productId }
    });
    if (!imagen) throw new Error('Imagen no encontrada para este producto');

    // Actualizar todas las imágenes del producto: la seleccionada es orden 0, las demás empiezan en 1
    await ProductImage.update(
        { orden: sequelize.literal('orden + 1') },
        { where: { product_id: productId } }
    );
    await imagen.update({ orden: 0 });

    return { message: 'Imagen principal establecida correctamente' };
};

// ============ Gestión de Atributos ============
exports.addProductAttribute = async (productId, { clave, valor, orden }) => {
    const producto = await Producto.findByPk(productId);
    if (!producto) throw new Error('Producto no encontrado');

    return ProductAttribute.create({
        product_id: productId,
        clave,
        valor,
        orden: orden || 0
    });
};

exports.updateProductAttribute = async (attributeId, { clave, valor, orden }) => {
    const atributo = await ProductAttribute.findByPk(attributeId);
    if (!atributo) throw new Error('Atributo no encontrado');

    return atributo.update({
        clave: clave || atributo.clave,
        valor: valor || atributo.valor,
        orden: orden !== undefined ? orden : atributo.orden
    });
};

exports.deleteProductAttribute = async (attributeId) => {
    const atributo = await ProductAttribute.findByPk(attributeId);
    if (!atributo) throw new Error('Atributo no encontrado');
    await atributo.destroy();
    return { message: 'Atributo eliminado correctamente' };
};
