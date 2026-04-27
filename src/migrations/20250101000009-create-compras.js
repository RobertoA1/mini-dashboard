'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('compras', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            usuario_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references: {
                    model: 'usuarios',
                    key: 'id',
                },
            },
            producto_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references: {
                    model: 'productos',
                    key: 'id',
                },
            },
            nombre_producto: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            imagen_producto: {
                allowNull: true,
                type: Sequelize.STRING(500),
            },
            descripcion_producto: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            precio: {
                allowNull: false,
                type: Sequelize.DECIMAL(10, 2),
            },
            cantidad: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            fecha_compra: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('compras');
    },
};