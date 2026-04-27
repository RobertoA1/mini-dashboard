'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CarritoItem extends Model {
        static associate(models) {
            CarritoItem.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
            CarritoItem.belongsTo(models.Producto, { foreignKey: 'producto_id', as: 'producto' });
        }
    }

    CarritoItem.init({
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
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: { min: 1 },
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
    }, {
        sequelize,
        modelName: 'CarritoItem',
        tableName: 'carrito_items',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    });

    return CarritoItem;
};
