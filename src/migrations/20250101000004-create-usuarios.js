'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            correo: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            rol: {
                type: Sequelize.ENUM('usuario', 'administrativo'),
                allowNull: false,
                defaultValue: 'usuario',
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
        await queryInterface.dropTable('usuarios');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_usuarios_rol";');
    },
};
