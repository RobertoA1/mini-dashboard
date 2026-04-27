'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('carrito_items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            usuario_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'usuarios',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            producto_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'productos',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            cantidad: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        });

        await queryInterface.addConstraint('carrito_items', {
            fields: ['usuario_id', 'producto_id'],
            type: 'unique',
            name: 'carrito_items_usuario_producto_unique',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('carrito_items');
    },
};
