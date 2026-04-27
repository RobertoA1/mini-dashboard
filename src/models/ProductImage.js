'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductImage extends Model {
        static associate(models) {
            ProductImage.belongsTo(models.Producto, { foreignKey: 'product_id', as: 'producto' });
        }
    }
    ProductImage.init({
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
        url: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                isIn: [['card', 'detail']],
            },
        },
        orden: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'ProductImage',
        tableName: 'product_images',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return ProductImage;
};