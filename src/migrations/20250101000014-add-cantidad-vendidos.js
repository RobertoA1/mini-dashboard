'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const columns = await queryInterface.sequelize.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'productos' AND column_name = 'cantidad_vendidos'`, { type: Sequelize.QueryTypes.SELECT });
        
        if (columns.length === 0) {
            await queryInterface.addColumn('productos', 'cantidad_vendidos', {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            });
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('productos', 'cantidad_vendidos');
    },
};