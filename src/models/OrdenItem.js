'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrdenItem extends Model {
        static associate(models) {
            OrdenItem.belongsTo(models.Orden, { foreignKey: 'orden_id', as: 'orden' });
            OrdenItem.belongsTo(models.Producto, { foreignKey: 'producto_id', as: 'producto' });
        }
    }

    OrdenItem.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        orden_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'ordenes',
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
        },
        precio_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'OrdenItem',
        tableName: 'orden_items',
        timestamps: false,
    });

    return OrdenItem;
};
