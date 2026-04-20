'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        // Obtener IDs de categorías y proveedores insertados
        const categorias = await queryInterface.sequelize.query(`SELECT id FROM categorias;`);
        const proveedores = await queryInterface.sequelize.query(`SELECT id FROM proveedores;`);
        const catRows = categorias[0];
        const provRows = proveedores[0];

        await queryInterface.bulkInsert('productos', [
            { sku: 'ELEC001', nombre: 'Laptop HP', descripcion: 'Laptop 15 pulgadas', categoria: catRows[0].id, precio_compra: 1200.00, precio_venta: 1500.00, stock_actual: 20, stock_minimo: 5, proveedor: provRows[0].id, fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { sku: 'ELEC002', nombre: 'Mouse Inalámbrico', descripcion: 'Mouse ergonómico', categoria: catRows[0].id, precio_compra: 10.00, precio_venta: 15.00, stock_actual: 3, stock_minimo: 10, proveedor: provRows[0].id, fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { sku: 'ROPA001', nombre: 'Camisa Casual', descripcion: 'Camisa de algodón', categoria: catRows[1].id, precio_compra: 25.00, precio_venta: 45.00, stock_actual: 50, stock_minimo: 20, proveedor: provRows[1].id, fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
            { sku: 'ALIM001', nombre: 'Arroz 1kg', descripcion: 'Arroz extra', categoria: catRows[2].id, precio_compra: 2.50, precio_venta: 4.00, stock_actual: 8, stock_minimo: 15, proveedor: provRows[2].id, fecha_creacion: new Date(), fecha_actualizacion: null, fecha_eliminacion: null },
        ], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('productos', null, {});
    },
};