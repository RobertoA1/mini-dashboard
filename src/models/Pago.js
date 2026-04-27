'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pago extends Model {
        static associate(models) {
            Pago.belongsTo(models.Orden, { foreignKey: 'orden_id', as: 'orden' });
        }
    }

    Pago.init({
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
        metodo_pago: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        estado_pago: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'PENDIENTE',
        },
    }, {
        sequelize,
        modelName: 'Pago',
        tableName: 'pagos',
        timestamps: true,
        createdAt: 'fecha_pago',
        updatedAt: false,
    });

    return Pago;
};
