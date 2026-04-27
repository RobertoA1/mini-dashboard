'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        static associate(models) {
            Usuario.hasMany(models.CarritoItem, { foreignKey: 'usuario_id', as: 'carritoItems' });
            Usuario.hasMany(models.Compra, { foreignKey: 'usuario_id', as: 'compras' });
            Usuario.hasMany(models.Orden, { foreignKey: 'usuario_id', as: 'ordenes' });
        }
    }

    Usuario.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        correo: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        rol: {
            type: DataTypes.ENUM('usuario', 'administrativo'),
            allowNull: false,
            defaultValue: 'usuario',
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
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        deletedAt: 'fecha_eliminacion',
        paranoid: true,
    });

    return Usuario;
};
