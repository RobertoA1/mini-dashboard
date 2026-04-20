'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('proveedores', [
            { nombre: 'TechSupply', ruc: '20123456781', representante: 'Juan Pérez', correo: 'juan@techsupply.com', telefono: '987654321', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { nombre: 'ModaStyle', ruc: '20567890123', representante: 'María Gómez', correo: 'maria@modastyle.com', telefono: '912345678', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { nombre: 'AlimentosDelSur', ruc: '20789012345', representante: 'Carlos Ruiz', correo: 'carlos@alimentosdelsur.com', telefono: '998877665', fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
        ], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('proveedores', null, {});
    },
};