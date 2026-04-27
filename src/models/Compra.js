'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Compra extends Model {
        static associate(models) {
            Compra.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
            Compra.belongsTo(models.Producto, { foreignKey: 'producto_id', as: 'producto' });
        }
    }

    Compra.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id',
            },
        },
        producto_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'productos',
                key: 'id',
            },
        },
        nombre_producto: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        imagen_producto: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        descripcion_producto: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        fecha_compra: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Compra',
        tableName: 'compras',
        timestamps: true,
        createdAt: 'fecha_compra',
        updatedAt: false,
    });

    return Compra;
};