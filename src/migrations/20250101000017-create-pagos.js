'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pagos', {
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
            metodo_pago: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            estado_pago: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: 'PENDIENTE',
            },
            fecha_pago: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('NOW()'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pagos');
    },
};
