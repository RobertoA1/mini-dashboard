'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cupones', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            codigo: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
            tipo: {
                type: Sequelize.ENUM('porcentaje', 'monto'),
                allowNull: false,
            },
            valor: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            activo: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            fecha_inicio: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
            fecha_fin: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
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
        await queryInterface.dropTable('cupones');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_cupones_tipo";');
    },
};
