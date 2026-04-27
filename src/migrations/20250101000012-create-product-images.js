'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const tables = await queryInterface.sequelize.query(`SELECT tablename FROM pg_tables WHERE schemaname = 'public'`, { type: Sequelize.QueryTypes.SELECT });
        const tableExists = tables.some(t => t.tablename === 'product_images');
        
        if (!tableExists) {
            await queryInterface.createTable('product_images', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                product_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'productos',
                        key: 'id',
                    },
                },
                url: {
                    type: Sequelize.STRING(500),
                    allowNull: false,
                },
                tipo: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                    validate: {
                        isIn: [['card', 'detail']],
                    },
                },
                orden: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
            });

            await queryInterface.addConstraint('product_images', {
                type: 'foreign key',
                name: 'product_images_product_id_fkey',
                fields: [{
                    name: 'product_id',
                    table: 'product_images',
                }],
                references: {
                    table: 'productos',
                    field: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });

            await queryInterface.addIndex('product_images', ['product_id', 'tipo', 'orden']);
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product_images');
    },
};