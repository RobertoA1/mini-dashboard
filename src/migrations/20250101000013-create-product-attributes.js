'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const tables = await queryInterface.sequelize.query(`SELECT tablename FROM pg_tables WHERE schemaname = 'public'`, { type: Sequelize.QueryTypes.SELECT });
        const tableExists = tables.some(t => t.tablename === 'product_attributes');
        
        if (!tableExists) {
            await queryInterface.createTable('product_attributes', {
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
                clave: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                valor: {
                    type: Sequelize.STRING(255),
                    allowNull: false,
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

            await queryInterface.addConstraint('product_attributes', {
                type: 'foreign key',
                name: 'product_attributes_product_id_fkey',
                fields: [{
                    name: 'product_id',
                    table: 'product_attributes',
                }],
                references: {
                    table: 'productos',
                    field: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });

            await queryInterface.addIndex('product_attributes', ['product_id', 'orden']);
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product_attributes');
    },
};