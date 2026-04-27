'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const now = new Date();
        const { Op } = Sequelize;

        // 1. Crear categorías de electrónica si no existen
        const categoriasNombres = [
            'Laptops',
            'Impresoras',
            'Audífonos',
            'Monitores',
            'Teclados y Mouse',
            'Tablets',
            'Cámaras',
            'Smartphones'
        ];

        for (const catNombre of categoriasNombres) {
            const [existing] = await queryInterface.sequelize.query(
                `SELECT id FROM categorias WHERE nombre = '${catNombre}' AND fecha_eliminacion IS NULL`
            );
            if (existing.length === 0) {
                await queryInterface.bulkInsert('categorias', [{
                    nombre: catNombre,
                    fecha_creacion: now,
                    fecha_actualizacion: null,
                    fecha_eliminacion: null
                }], {});
            }
        }

        // 2. Crear proveedores de electrónica si no existen
        const proveedoresData = [
            { nombre: 'HP Inc. Perú', ruc: '20100154321', representante: 'Juan Pérez', correo: 'ventas@hp.com.pe', telefono: '987654321' },
            { nombre: 'Lenovo Perú', ruc: '20200265432', representante: 'María García', correo: 'ventas@lenovo.pe', telefono: '987654322' },
            { nombre: 'Dell Technologies Perú', ruc: '20300376543', representante: 'Carlos López', correo: 'ventas@dell.pe', telefono: '987654323' },
            { nombre: 'Logitech Perú', ruc: '20400487654', representante: 'Ana Torres', correo: 'ventas@logitech.pe', telefono: '987654324' },
            { nombre: 'Canon Perú', ruc: '20500598765', representante: 'Pedro Ruiz', correo: 'ventas@canon.pe', telefono: '987654325' },
            { nombre: 'Samsung Perú', ruc: '20600609876', representante: 'Laura Mendoza', correo: 'ventas@samsung.pe', telefono: '987654326' }
        ];

        for (const prov of proveedoresData) {
            const [existing] = await queryInterface.sequelize.query(
                `SELECT id FROM proveedores WHERE ruc = '${prov.ruc}' AND fecha_eliminacion IS NULL`
            );
            if (existing.length === 0) {
                await queryInterface.bulkInsert('proveedores', [{
                    ...prov,
                    fecha_creacion: now,
                    fecha_actualizacion: null,
                    fecha_eliminacion: null
                }], {});
            }
        }

        // Obtener IDs de categorías y proveedores
        const categorias = await queryInterface.sequelize.query(
            `SELECT id, nombre FROM categorias WHERE fecha_eliminacion IS NULL AND nombre IN ('Laptops', 'Impresoras', 'Audífonos', 'Monitores', 'Teclados y Mouse', 'Tablets', 'Cámaras', 'Smartphones')`
        );
        const proveedores = await queryInterface.sequelize.query(
            `SELECT id, nombre FROM proveedores WHERE fecha_eliminacion IS NULL`
        );

        const catMap = {};
        for (const cat of categorias[0]) {
            catMap[cat.nombre] = cat.id;
        }

        const provMap = {};
        for (const prov of proveedores[0]) {
            // Extraer nombre base del proveedor (antes del espacio)
            const baseName = prov.nombre.split(' ')[0].toLowerCase();
            provMap[baseName] = prov.id;
        }

        // 3. Crear 20 productos de electrónica reales
        const productosData = [
            // Laptops (5)
            { sku: 'LAP-001', nombre: 'Laptop HP Pavilion 15', descripcion: 'Laptop HP Pavilion 15 con Intel Core i7, 16GB RAM, 512GB SSD, pantalla 15.6" FHD. Ideal para trabajo y entretenimiento.', categoria: 'Laptops', proveedor: 'hp', precio_compra: 2800, precio_venta: 3499, stock: 15, descuento: 10, envio: true },
            { sku: 'LAP-002', nombre: 'Laptop Lenovo ThinkPad X1 Carbon', descripcion: 'Ultrabook empresarial Lenovo ThinkPad X1 Carbon Gen 10, Intel Core i7, 16GB RAM, 1TB SSD, pantalla 14" WUXGA.', categoria: 'Laptops', proveedor: 'lenovo', precio_compra: 5200, precio_venta: 6499, stock: 8, descuento: 5, envio: true },
            { sku: 'LAP-003', nombre: 'Laptop Dell XPS 13 Plus', descripcion: 'Laptop premium Dell XPS 13 Plus, Intel Core i7, 16GB RAM, 512GB SSD, pantalla 13.4" OLED touch, diseño innovador.', categoria: 'Laptops', proveedor: 'dell', precio_compra: 4800, precio_venta: 5999, stock: 10, descuento: 8, envio: true },
            { sku: 'LAP-004', nombre: 'Laptop HP Envy x360', descripcion: 'Convertible 2 en 1 HP Envy x360, AMD Ryzen 7, 16GB RAM, 512GB SSD, pantalla 15.6" FHD touch, stylus incluido.', categoria: 'Laptops', proveedor: 'hp', precio_compra: 3200, precio_venta: 3999, stock: 12, descuento: 12, envio: true },
            { sku: 'LAP-005', nombre: 'Laptop Lenovo Legion 5 Pro', descripcion: 'Laptop gaming Lenovo Legion 5 Pro, AMD Ryzen 7, RTX 3060, 16GB RAM, 1TB SSD, pantalla 16" QHD 165Hz.', categoria: 'Laptops', proveedor: 'lenovo', precio_compra: 4400, precio_venta: 5499, stock: 6, descuento: 0, envio: true },

            // Impresoras (3)
            { sku: 'IMP-001', nombre: 'Impresora HP LaserJet Pro M404n', descripcion: 'Impresora láser monocromática HP LaserJet Pro M404n, velocidad 40 ppm, red Ethernet, compatible con HP Smart.', categoria: 'Impresoras', proveedor: 'hp', precio_compra: 800, precio_venta: 999, stock: 20, descuento: 15, envio: false },
            { sku: 'IMP-002', nombre: 'Impresora Multifuncional Canon PIXMA G6020', descripcion: 'Impresora multifuncional Canon PIXMA G6020 con sistema de tanque de tinta, impresión, copia y escaneo, Wi-Fi.', categoria: 'Impresoras', proveedor: 'canon', precio_compra: 560, precio_venta: 699, stock: 18, descuento: 10, envio: false },
            { sku: 'IMP-003', nombre: 'Impresora HP Color LaserJet Pro MFP M479fdw', descripcion: 'Impresora láser color multifuncional HP Color LaserJet Pro MFP M479fdw, impresión, copia, escaneo, fax, Wi-Fi.', categoria: 'Impresoras', proveedor: 'hp', precio_compra: 1600, precio_venta: 1999, stock: 10, descuento: 8, envio: true },

            // Audífonos (3)
            { sku: 'AUD-001', nombre: 'Audífonos Logitech G Pro X', descripcion: 'Audífonos gaming Logitech G Pro X con sonido surround 7.1, micrófono Blue VO!CE, diseño cómodo para sesiones largas.', categoria: 'Audífonos', proveedor: 'logitech', precio_compra: 320, precio_venta: 399, stock: 30, descuento: 5, envio: false },
            { sku: 'AUD-002', nombre: 'Audífonos Samsung Galaxy Buds2 Pro', descripcion: 'Audífonos inalámbricos Samsung Galaxy Buds2 Pro con cancelación activa de ruido, sonido Hi-Fi, resistentes al agua IPX7.', categoria: 'Audífonos', proveedor: 'samsung', precio_compra: 480, precio_venta: 599, stock: 25, descuento: 10, envio: false },
            { sku: 'AUD-003', nombre: 'Audífonos Logitech Zone Wireless', descripcion: 'Audífonos empresariales Logitech Zone Wireless con cancelación de ruido, certificados para Microsoft Teams, carga inalámbrica.', categoria: 'Audífonos', proveedor: 'logitech', precio_compra: 560, precio_venta: 699, stock: 15, descuento: 0, envio: false },

            // Monitores (3)
            { sku: 'MON-001', nombre: 'Monitor Dell UltraSharp U2720Q', descripcion: 'Monitor 4K Dell UltraSharp U2720Q de 27", IPS, 99% sRGB, USB-C con 90W power delivery, ajuste de altura.', categoria: 'Monitores', proveedor: 'dell', precio_compra: 1040, precio_venta: 1299, stock: 12, descuento: 10, envio: true },
            { sku: 'MON-002', nombre: 'Monitor Gaming Samsung Odyssey G5', descripcion: 'Monitor curvo gaming Samsung Odyssey G5 de 32", 2K QHD, 144Hz, 1ms, FreeSync Premium, HDR10.', categoria: 'Monitores', proveedor: 'samsung', precio_compra: 960, precio_venta: 1199, stock: 10, descuento: 12, envio: true },
            { sku: 'MON-003', nombre: 'Monitor HP Z27k G3', descripcion: 'Monitor profesional HP Z27k G3 de 27", 4K UHD, IPS, 99% sRGB, USB-C con 65W power delivery, marco ultrafino.', categoria: 'Monitores', proveedor: 'hp', precio_compra: 1200, precio_venta: 1499, stock: 8, descuento: 8, envio: true },

            // Teclados y Mouse (3)
            { sku: 'PER-001', nombre: 'Teclado Logitech MX Keys', descripcion: 'Teclado inalámbrico Logitech MX Keys con retroiluminación inteligente, multi-dispositivo, recargable USB-C.', categoria: 'Teclados y Mouse', proveedor: 'logitech', precio_compra: 320, precio_venta: 399, stock: 22, descuento: 5, envio: false },
            { sku: 'PER-002', nombre: 'Mouse Logitech MX Master 3S', descripcion: 'Mouse inalámbrico Logitech MX Master 3S, sensor 8000 DPI, scroll MagSpeed electromagnético, multi-dispositivo.', categoria: 'Teclados y Mouse', proveedor: 'logitech', precio_compra: 360, precio_venta: 449, stock: 28, descuento: 8, envio: false },
            { sku: 'PER-003', nombre: 'Combo Teclado + Mouse Lenovo Essential', descripcion: 'Combo inalámbrico Lenovo Essential, teclado de perfil bajo, mouse óptico ergonómico, receptor USB nano.', categoria: 'Teclados y Mouse', proveedor: 'lenovo', precio_compra: 120, precio_venta: 149, stock: 35, descuento: 15, envio: false },

            // Tablets y Cámaras (3)
            { sku: 'TAB-001', nombre: 'Tablet Samsung Galaxy Tab S8', descripcion: 'Tablet Samsung Galaxy Tab S8 con pantalla 11" LCD, procesador Snapdragon 8 Gen 1, 8GB RAM, 128GB, S Pen incluido.', categoria: 'Tablets', proveedor: 'samsung', precio_compra: 2000, precio_venta: 2499, stock: 10, descuento: 10, envio: true },
            { sku: 'CAM-001', nombre: 'Cámara Canon EOS Rebel T7', descripcion: 'Cámara DSLR Canon EOS Rebel T7, sensor APS-C 24.1MP, video Full HD, Wi-Fi, lente 18-55mm incluido.', categoria: 'Cámaras', proveedor: 'canon', precio_compra: 1600, precio_venta: 1999, stock: 8, descuento: 5, envio: true },
            { sku: 'SMA-001', nombre: 'Smartphone Samsung Galaxy S24', descripcion: 'Samsung Galaxy S24 con pantalla 6.2" AMOLED 120Hz, procesador Snapdragon 8 Gen 3, 8GB RAM, 256GB, cámara AI de 50MP.', categoria: 'Smartphones', proveedor: 'samsung', precio_compra: 3200, precio_venta: 3999, stock: 15, descuento: 8, envio: true }
        ];

        // Insertar productos
        for (const prod of productosData) {
            const descuentoTipo = prod.descuento > 0 ? 'porcentaje' : null;
            const costoEnvio = prod.envio ? 0 : 15;

            await queryInterface.bulkInsert('productos', [{
                sku: prod.sku,
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                categoria: catMap[prod.categoria],
                descuento_tipo: descuentoTipo,
                descuento_valor: prod.descuento,
                cuotas_sin_interes: prod.precio_venta > 1000,
                envio_gratis: prod.envio,
                costo_envio: costoEnvio,
                precio_compra: prod.precio_compra,
                precio_venta: prod.precio_venta,
                stock_actual: prod.stock,
                stock_minimo: Math.floor(prod.stock * 0.2),
                proveedor: provMap[prod.proveedor],
                fecha_creacion: now,
                fecha_actualizacion: null,
                fecha_eliminacion: null
            }], {});
        }

        // Obtener IDs de productos insertados
        const skus = productosData.map(p => `'${p.sku}'`).join(',');
        const [productRows] = await queryInterface.sequelize.query(
            `SELECT id, sku, nombre FROM productos WHERE sku IN (${skus})`
        );

        const insertedProducts = productRows;

        // 4. Crear imágenes para cada producto
        const imageUrls = {
            'LAP-001': ['https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'],
            'LAP-002': ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'],
            'LAP-003': ['https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500'],
            'LAP-004': ['https://images.unsplash.com/photo-1544099858-75feeb57f01e?w=500', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'],
            'LAP-005': ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500', 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500'],
            'IMP-001': ['https://images.unsplash.com/photo-1612815154858-60aa4c238f45?w=500', 'https://images.unsplash.com/photo-1589652717521-10d0c82a9d00?w=500'],
            'IMP-002': ['https://images.unsplash.com/photo-1589652717521-10d0c82a9d00?w=500', 'https://images.unsplash.com/photo-1612815154858-60aa4c238f45?w=500'],
            'IMP-003': ['https://images.unsplash.com/photo-1612815154858-60aa4c238f45?w=500', 'https://images.unsplash.com/photo-1589652717521-10d0c82a9d00?w=500'],
            'AUD-001': ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'],
            'AUD-002': ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
            'AUD-003': ['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500'],
            'MON-001': ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500', 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500'],
            'MON-002': ['https://images.unsplash.com/photo-1547394765-1858a97a34f2?w=500', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500'],
            'MON-003': ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500'],
            'PER-001': ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500', 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'],
            'PER-002': ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500'],
            'PER-003': ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500', 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'],
            'TAB-001': ['https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'],
            'CAM-001': ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500'],
            'SMA-001': ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500']
        };

        for (const prod of insertedProducts) {
            const prodData = productosData.find(p => p.sku === prod.sku);
            const urls = imageUrls[prod.sku] || ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'];

            // Insertar imagen principal (orden 0)
            await queryInterface.bulkInsert('product_images', [{
                product_id: prod.id,
                url: urls[0],
                tipo: 'card',
                orden: 0,
                created_at: now,
                updated_at: now
            }]);

            // Insertar imagen secundaria (orden 1)
            if (urls.length > 1) {
                await queryInterface.bulkInsert('product_images', [{
                    product_id: prod.id,
                    url: urls[1],
                    tipo: 'detail',
                    orden: 1,
                    created_at: now,
                    updated_at: now
                }]);
            }
        }

        // 5. Crear atributos para cada producto
        const atributosData = {
            'LAP-001': [{ clave: 'Procesador', valor: 'Intel Core i7-1355U' }, { clave: 'Memoria RAM', valor: '16GB DDR4' }, { clave: 'Almacenamiento', valor: '512GB SSD NVMe' }, { clave: 'Pantalla', valor: '15.6" FHD IPS' }],
            'LAP-002': [{ clave: 'Procesador', valor: 'Intel Core i7-1265U' }, { clave: 'Memoria RAM', valor: '16GB LPDDR5' }, { clave: 'Almacenamiento', valor: '1TB SSD NVMe' }, { clave: 'Pantalla', valor: '14" WUXGA IPS' }],
            'LAP-003': [{ clave: 'Procesador', valor: 'Intel Core i7-1360P' }, { clave: 'Memoria RAM', valor: '16GB LPDDR5' }, { clave: 'Almacenamiento', valor: '512GB SSD' }, { clave: 'Pantalla', valor: '13.4" OLED Touch' }],
            'LAP-004': [{ clave: 'Procesador', valor: 'AMD Ryzen 7 7730U' }, { clave: 'Memoria RAM', valor: '16GB DDR4' }, { clave: 'Almacenamiento', valor: '512GB SSD' }, { clave: 'Pantalla', valor: '15.6" FHD Touch' }],
            'LAP-005': [{ clave: 'Procesador', valor: 'AMD Ryzen 7 6800H' }, { clave: 'Memoria RAM', valor: '16GB DDR5' }, { clave: 'Almacenamiento', valor: '1TB SSD NVMe' }, { clave: 'Pantalla', valor: '16" QHD 165Hz' }],
            'IMP-001': [{ clave: 'Tipo', valor: 'Láser Monocromática' }, { clave: 'Velocidad', valor: '40 ppm' }, { clave: 'Resolución', valor: '4800x600 dpi' }, { clave: 'Conectividad', valor: 'Ethernet, USB' }],
            'IMP-002': [{ clave: 'Tipo', valor: 'Inyección de Tinta' }, { clave: 'Funciones', valor: 'Impresión, Copia, Escaneo' }, { clave: 'Conectividad', valor: 'Wi-Fi, USB' }, { clave: 'Capacidad', valor: 'Hasta 6000 páginas' }],
            'IMP-003': [{ clave: 'Tipo', valor: 'Láser Color' }, { clave: 'Velocidad', valor: '28 ppm' }, { clave: 'Funciones', valor: 'Impresión, Copia, Escaneo, Fax' }, { clave: 'Conectividad', valor: 'Wi-Fi, Ethernet, USB' }],
            'AUD-001': [{ clave: 'Tipo', valor: 'Over-ear Gaming' }, { clave: 'Conexión', valor: 'USB / 3.5mm' }, { clave: 'Micrófono', valor: 'Blue VO!CE detachable' }, { clave: 'Sonido', valor: 'DTS Headphone:X 2.0' }],
            'AUD-002': [{ clave: 'Tipo', valor: 'True Wireless' }, { clave: 'Cancelación', valor: 'ANC Inteligente' }, { clave: 'Resistencia', valor: 'IPX7' }, { clave: 'Batería', valor: 'Hasta 8 horas + case' }],
            'AUD-003': [{ clave: 'Tipo', valor: 'On-ear Wireless' }, { clave: 'Conexión', valor: 'Bluetooth, USB-A receptor' }, { clave: 'Cancelación', valor: 'ANC avanzada' }, { clave: 'Batería', valor: 'Hasta 14 horas' }],
            'MON-001': [{ clave: 'Resolución', valor: '4K UHD (3840x2160)' }, { clave: 'Panel', valor: 'IPS' }, { clave: 'Tamaño', valor: '27 pulgadas' }, { clave: 'Cobertura color', valor: '99% sRGB' }],
            'MON-002': [{ clave: 'Resolución', valor: '2K QHD (2560x1440)' }, { clave: 'Panel', valor: 'VA Curvo 1000R' }, { clave: 'Tamaño', valor: '32 pulgadas' }, { clave: 'Tasa refresco', valor: '144Hz' }],
            'MON-003': [{ clave: 'Resolución', valor: '4K UHD (3840x2160)' }, { clave: 'Panel', valor: 'IPS' }, { clave: 'Tamaño', valor: '27 pulgadas' }, { clave: 'USB-C Power', valor: '65W' }],
            'PER-001': [{ clave: 'Tipo', valor: 'Teclado inalámbrico' }, { clave: 'Retroiluminación', valor: 'Smart' }, { clave: 'Batería', valor: '10 días (con luz)' }, { clave: 'Conexión', valor: 'USB-C recargable' }],
            'PER-002': [{ clave: 'Tipo', valor: 'Mouse inalámbrico' }, { clave: 'DPI', valor: '8000 DPI' }, { clave: 'Scroll', valor: 'MagSpeed electromagnético' }, { clave: 'Botones', valor: '7 programables' }],
            'PER-003': [{ clave: 'Tipo', valor: 'Combo inalámbrico' }, { clave: 'Teclado', valor: 'Perfil bajo silencioso' }, { clave: 'Mouse', valor: 'Óptico 1200 DPI' }, { clave: 'Receptor', valor: 'USB Nano' }],
            'TAB-001': [{ clave: 'Pantalla', valor: '11" LCD 120Hz' }, { clave: 'Procesador', valor: 'Snapdragon 8 Gen 1' }, { clave: 'RAM', valor: '8GB' }, { clave: 'Almacenamiento', valor: '128GB' }],
            'CAM-001': [{ clave: 'Sensor', valor: 'APS-C 24.1MP' }, { clave: 'Video', valor: 'Full HD 30fps' }, { clave: 'Conectividad', valor: 'Wi-Fi, NFC' }, { clave: 'Lente', valor: '18-55mm incluido' }],
            'SMA-001': [{ clave: 'Pantalla', valor: '6.2" AMOLED 120Hz' }, { clave: 'Procesador', valor: 'Snapdragon 8 Gen 3' }, { clave: 'RAM', valor: '8GB' }, { clave: 'Cámara principal', valor: '50MP con AI' }]
        };

        for (const prod of insertedProducts) {
            const attrs = atributosData[prod.sku] || [];
            for (let i = 0; i < attrs.length; i++) {
                await queryInterface.bulkInsert('product_attributes', [{
                    product_id: prod.id,
                    clave: attrs[i].clave,
                    valor: attrs[i].valor,
                    orden: i,
                    created_at: now,
                    updated_at: now,
                }]);
            }
        }

        console.log('✅ Seeder completado: 20 productos electrónicos creados con imágenes y atributos');
    },

    async down(queryInterface, Sequelize) {
        // Eliminar en orden inverso para respetar las FK
        await queryInterface.bulkDelete('product_attributes', null, {});
        await queryInterface.bulkDelete('product_images', null, {});
        await queryInterface.bulkDelete('productos', {
            sku: {
                [Sequelize.Op.like]: '%-___-%'
            }
        }, {});
        
        console.log('⚠️  Seeder revertido: Productos electrónicos eliminados');
    }
};
