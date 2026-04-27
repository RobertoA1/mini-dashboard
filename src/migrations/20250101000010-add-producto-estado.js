'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('productos', 'estado', {
            type: Sequelize.ENUM('Nuevo', 'Usado'),
            allowNull: false,
            defaultValue: 'Nuevo',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('productos', 'estado');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_productos_estado";');
    },
};