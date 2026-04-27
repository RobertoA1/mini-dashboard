'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Envio extends Model {
        static associate(models) {
            Envio.belongsTo(models.Orden, { foreignKey: 'orden_id', as: 'orden' });
        }
    }

    Envio.init({
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
        nombre_completo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        ciudad: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        codigo_postal: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        numero: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apartamento: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        metodo_envio: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Envio',
        tableName: 'envios',
        timestamps: false,
    });

    return Envio;
};
