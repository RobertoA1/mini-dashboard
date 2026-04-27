'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Producto extends Model {
        static associate(models) {
            Producto.belongsTo(models.Categoria, { foreignKey: 'categoria', as: 'categoriaRel' });
            Producto.belongsTo(models.Proveedor, { foreignKey: 'proveedor', as: 'proveedorRel' });
            Producto.hasMany(models.CarritoItem, { foreignKey: 'producto_id', as: 'carritoItems' });
            Producto.hasMany(models.Compra, { foreignKey: 'producto_id', as: 'compras' });
            Producto.hasMany(models.ProductImage, { foreignKey: 'product_id', as: 'imagenes' });
            Producto.hasMany(models.ProductAttribute, { foreignKey: 'product_id', as: 'atributos' });
        }
    }
    Producto.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        sku: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        descuento_tipo: {
            type: DataTypes.ENUM('porcentaje', 'monto'),
            allowNull: true,
            defaultValue: null,
        },
        descuento_valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
            validate: { min: 0 },
        },
        cuotas_sin_interes: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        envio_gratis: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        costo_envio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
            validate: { min: 0 },
        },
        categoria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'categorias',
                key: 'id',
            },
        },
        precio_compra: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        precio_venta: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        stock_actual: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        stock_minimo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
            validate: { min: 0 },
        },
        estado: {
            type: DataTypes.ENUM('Nuevo', 'Usado'),
            allowNull: false,
            defaultValue: 'Nuevo',
        },
        cantidad_vendidos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        proveedor: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'proveedores',
                key: 'id',
            },
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        fecha_actualizacion: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        fecha_eliminacion: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    }, {
        sequelize,
        modelName: 'Producto',
        tableName: 'productos',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        deletedAt: 'fecha_eliminacion',
        paranoid: true,
    });
    return Producto;
};
