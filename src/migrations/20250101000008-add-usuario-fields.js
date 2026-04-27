'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('usuarios', 'apellido', {
            type: Sequelize.STRING(100),
            allowNull: true,
        });
        await queryInterface.addColumn('usuarios', 'direccion', {
            type: Sequelize.STRING(255),
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('usuarios', 'direccion');
        await queryInterface.removeColumn('usuarios', 'apellido');
    },
};