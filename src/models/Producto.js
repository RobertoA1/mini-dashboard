'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Producto extends Model {
        static associate(models) {
            Producto.belongsTo(models.Categoria, { foreignKey: 'categoria', as: 'categoriaRel' });
            Producto.belongsTo(models.Proveedor, { foreignKey: 'proveedor', as: 'proveedorRel' });
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