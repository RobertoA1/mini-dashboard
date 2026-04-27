'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductAttribute extends Model {
        static associate(models) {
            ProductAttribute.belongsTo(models.Producto, { foreignKey: 'product_id', as: 'producto' });
        }
    }
    ProductAttribute.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'productos',
                key: 'id',
            },
        },
        clave: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        valor: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        orden: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'ProductAttribute',
        tableName: 'product_attributes',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return ProductAttribute;
};