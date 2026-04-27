'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orden extends Model {
        static associate(models) {
            Orden.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
            Orden.hasMany(models.OrdenItem, { foreignKey: 'orden_id', as: 'items' });
            Orden.hasOne(models.Envio, { foreignKey: 'orden_id', as: 'envio' });
            Orden.hasOne(models.Pago, { foreignKey: 'orden_id', as: 'pago' });
        }
    }

    Orden.init({
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
        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        igv: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        descuento_cupon: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        },
        costo_envio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'PENDIENTE', // PENDIENTE, PAGADA, ENVIADA, CANCELADA
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Orden',
        tableName: 'ordenes',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: false,
    });

    return Orden;
};
