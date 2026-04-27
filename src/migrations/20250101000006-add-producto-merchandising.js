'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('productos', 'descuento_tipo', {
            type: Sequelize.ENUM('porcentaje', 'monto'),
            allowNull: true,
            defaultValue: null,
        });

        await queryInterface.addColumn('productos', 'descuento_valor', {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        });

        await queryInterface.addColumn('productos', 'cuotas_sin_interes', {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        });

        await queryInterface.addColumn('productos', 'envio_gratis', {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        });

        await queryInterface.addColumn('productos', 'costo_envio', {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('productos', 'costo_envio');
        await queryInterface.removeColumn('productos', 'envio_gratis');
        await queryInterface.removeColumn('productos', 'cuotas_sin_interes');
        await queryInterface.removeColumn('productos', 'descuento_valor');
        await queryInterface.removeColumn('productos', 'descuento_tipo');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_productos_descuento_tipo";');
    },
};
