'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('categorias', [
            { nombre: 'Electrónica', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { nombre: 'Ropa', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { nombre: 'Alimentos', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
        ], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categorias', null, {});
    },
};