'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cupon extends Model {
        static associate() {}
    }

    Cupon.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        codigo: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        tipo: {
            type: DataTypes.ENUM('porcentaje', 'monto'),
            allowNull: false,
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: true,
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
        es_del_dia: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: 'Cupon',
        tableName: 'cupones',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        deletedAt: 'fecha_eliminacion',
        paranoid: true,
    });

    return Cupon;
};
