'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('productos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            sku: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            categoria: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'categorias',
                    key: 'id',
                },
            },
            precio_compra: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            precio_venta: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            stock_actual: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            stock_minimo: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0,
            },
            proveedor: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'proveedores',
                    key: 'id',
                },
            },
            fecha_creacion: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()'),
            },
            fecha_actualizacion: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
            fecha_eliminacion: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('productos');
    },
};