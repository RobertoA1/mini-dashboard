'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orden_items', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            orden_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'ordenes',
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
            },
            precio_unitario: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            subtotal: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orden_items');
    },
};
