'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('cupones', [
            {
                codigo: 'BIENVENIDA10',
                tipo: 'porcentaje',
                valor: 10,
                activo: true,
                fecha_inicio: new Date('2025-01-01T00:00:00.000Z'),
                fecha_fin: null,
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
                es_del_dia: false,
            },
            {
                codigo: 'DESCUENTO20',
                tipo: 'monto',
                valor: 20,
                activo: true,
                fecha_inicio: new Date('2025-01-01T00:00:00.000Z'),
                fecha_fin: null,
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
                es_del_dia: false,
            },
            {
                codigo: 'COMPRA120',
                tipo: 'monto',
                valor: 120,
                activo: true,
                fecha_inicio: new Date('2025-01-01T00:00:00.000Z'),
                fecha_fin: null,
                fecha_creacion: new Date(),
                fecha_actualizacion: null,
                fecha_eliminacion: null,
                es_del_dia: true,
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('cupones', null, {});
    },
};
