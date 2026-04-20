'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('categorias', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
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
        await queryInterface.dropTable('categorias');
    },
};