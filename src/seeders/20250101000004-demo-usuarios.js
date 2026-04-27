'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        const passwordHash = await bcrypt.hash('Admin123!', 10);
        const userHash = await bcrypt.hash('Usuario123!', 10);

        await queryInterface.bulkInsert('usuarios', [
            {
                nombre: 'Roberto',
                apellido: 'Alva',
                direccion: 'Av. Lima 123, Lima',
                correo: 'admin1@tienda.local',
                password_hash: passwordHash,
                rol: 'administrativo',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Maria',
                apellido: 'Garcia',
                direccion: 'Av. Arequipa 456, Arequipa',
                correo: 'admin2@tienda.local',
                password_hash: passwordHash,
                rol: 'administrativo',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Carlos',
                apellido: 'Perez',
                direccion: 'Jr. Central 789, Lima',
                correo: 'cliente1@tienda.local',
                password_hash: userHash,
                rol: 'usuario',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Ana',
                apellido: 'Lopez',
                direccion: 'Calle Mayor 101, Cusco',
                correo: 'cliente2@tienda.local',
                password_hash: userHash,
                rol: 'usuario',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Luis',
                apellido: 'Diaz',
                direccion: 'Av. Peru 202, Trujillo',
                correo: 'cliente3@tienda.local',
                password_hash: userHash,
                rol: 'usuario',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Sofia',
                apellido: 'Martinez',
                direccion: 'Plaza Real 303, Chiclayo',
                correo: 'cliente4@tienda.local',
                password_hash: userHash,
                rol: 'usuario',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
            {
                nombre: 'Jorge',
                apellido: 'Torres',
                direccion: 'Av. Nacional 404, Iquitos',
                correo: 'cliente5@tienda.local',
                password_hash: userHash,
                rol: 'usuario',
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    },
};