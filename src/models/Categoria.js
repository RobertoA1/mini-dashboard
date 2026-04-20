'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        static associate(models) {
            Categoria.hasMany(models.Producto, { foreignKey: 'categoria', as: 'productos' });
        }
    }
    Categoria.init({
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
        modelName: 'Categoria',
        tableName: 'categorias',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        deletedAt: 'fecha_eliminacion',
        paranoid: true,
    });
    return Categoria;
};