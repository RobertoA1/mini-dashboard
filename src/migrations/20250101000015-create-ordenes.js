'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ordenes', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
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
            subtotal: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            igv: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            descuento_cupon: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0,
            },
            costo_envio: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            total: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: 'PENDIENTE',
            },
            fecha_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('NOW()'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ordenes');
    },
};
