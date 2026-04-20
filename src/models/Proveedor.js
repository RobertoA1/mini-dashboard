'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Proveedor extends Model {
        static associate(models) {
            Proveedor.hasMany(models.Producto, { foreignKey: 'proveedor', as: 'productos' });
        }
    }
    Proveedor.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        ruc: {
            type: DataTypes.CHAR(11),
            allowNull: true,
        },
        representante: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: false,
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
        modelName: 'Proveedor',
        tableName: 'proveedores',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        deletedAt: 'fecha_eliminacion',
        paranoid: true,
    });
    return Proveedor;
};