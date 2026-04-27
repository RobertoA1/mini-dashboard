'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('envios', {
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
            nombre_completo: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            telefono: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            pais: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            region: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            ciudad: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            codigo_postal: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            direccion: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            numero: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            apartamento: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            metodo_envio: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('envios');
    },
};
