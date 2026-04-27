const { Producto, Categoria, Proveedor, Orden, OrdenItem, Usuario } = require('../../models');
const { sequelize } = require('../../models');
const { Op } = require('sequelize');

exports.getKPIs = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Métricas básicas de inventario
    const totalProductos = await Producto.count({ where: { fecha_eliminacion: null } });

    const [valorResult] = await sequelize.query(`
    SELECT SUM(stock_actual * precio_compra) as total
    FROM productos
    WHERE fecha_eliminacion IS NULL
  `);
    const valorTotalInventario = valorResult[0]?.total || 0;

    const productosBajoStock = await Producto.count({
        where: {
            fecha_eliminacion: null,
            stock_actual: { [Op.lt]: sequelize.col('stock_minimo') }
        }
    });

    const productoMasValioso = await Producto.findOne({
        where: { fecha_eliminacion: null },
        attributes: ['id', 'nombre', 'stock_actual', 'precio_compra'],
        order: [[sequelize.literal('stock_actual * precio_compra'), 'DESC']],
    });

    const [categoriasTop] = await sequelize.query(`
    SELECT c.nombre, COUNT(p.id) as total
    FROM categorias c
    LEFT JOIN productos p ON c.id = p.categoria AND p.fecha_eliminacion IS NULL
    WHERE c.fecha_eliminacion IS NULL
    GROUP BY c.id
    ORDER BY total DESC
    LIMIT 10
  `);

    const [distribucionValorCategorias] = await sequelize.query(`
    SELECT c.nombre, COALESCE(SUM(p.stock_actual * p.precio_compra), 0) as total
    FROM categorias c
    LEFT JOIN productos p ON c.id = p.categoria AND p.fecha_eliminacion IS NULL
    WHERE c.fecha_eliminacion IS NULL
    GROUP BY c.id
    HAVING COALESCE(SUM(p.stock_actual * p.precio_compra), 0) > 0
    ORDER BY total DESC
    `);

    const bajoStockList = await Producto.findAll({
        where: {
            fecha_eliminacion: null,
            stock_actual: { [Op.lt]: sequelize.col('stock_minimo') }
        },
        include: [{ model: Categoria, as: 'categoriaRel', attributes: ['nombre'] }],
        order: [['stock_actual', 'ASC']],
    });

    // Métricas de ventas del día
    const ventasHoy = await Orden.count({
        where: {
            fecha_creacion: { [Op.gte]: today, [Op.lt]: tomorrow },
            estado: { [Op.notIn]: ['CANCELADA'] }
        }
    });

    const ingresosHoy = await Orden.sum('total', {
        where: {
            fecha_creacion: { [Op.gte]: today, [Op.lt]: tomorrow },
            estado: { [Op.notIn]: ['CANCELADA'] }
        }
    }) || 0;

    // Ingresos totales (todas las órdenes)
    const ingresosTotales = await Orden.sum('total', {
        where: { estado: { [Op.notIn]: ['CANCELADA'] } }
    }) || 0;

    const totalOrdenes = await Orden.count({
        where: { estado: { [Op.notIn]: ['CANCELADA'] } }
    });

    // Productos más vendidos (top 10)
    const [productosMasVendidos] = await sequelize.query(`
        SELECT p.id, p.nombre, p.sku, SUM(oi.cantidad) as total_vendido,
               SUM(oi.subtotal) as total_ingresos
        FROM productos p
        INNER JOIN orden_items oi ON p.id = oi.producto_id
        INNER JOIN ordenes o ON oi.orden_id = o.id
        WHERE o.estado != 'CANCELADA'
        GROUP BY p.id, p.nombre, p.sku
        ORDER BY total_vendido DESC
        LIMIT 10
    `);

    // Promedio de compra por usuario
    const [promedioPorUsuario] = await sequelize.query(`
        SELECT AVG(total_por_usuario) as promedio_compra
        FROM (
            SELECT usuario_id, SUM(total) as total_por_usuario
            FROM ordenes
            WHERE estado != 'CANCELADA'
            GROUP BY usuario_id
        ) as compras_usuario
    `);

    // Usuarios únicos que compraron hoy
    const usuariosUnicosHoy = await Orden.count({
        where: {
            fecha_creacion: { [Op.gte]: today, [Op.lt]: tomorrow },
            estado: { [Op.notIn]: ['CANCELADA'] }
        },
        distinct: true,
        col: 'usuario_id'
    });

    // Evolución de ventas últimos 30 días
    const [evolucionVentas] = await sequelize.query(`
        SELECT DATE_TRUNC('day', fecha_creacion) as fecha,
               COUNT(*) as cantidad_ordenes,
               SUM(total) as total_ventas
        FROM ordenes
        WHERE fecha_creacion >= CURRENT_DATE - INTERVAL '30 days'
          AND estado != 'CANCELADA'
        GROUP BY DATE_TRUNC('day', fecha_creacion)
        ORDER BY fecha DESC
    `);

    // Distribución de productos por categoría (cantidad)
    const [distribucionCategorias] = await sequelize.query(`
        SELECT c.nombre, COUNT(p.id) as total_productos,
               SUM(p.stock_actual) as total_stock,
               AVG(p.precio_venta) as precio_promedio
        FROM categorias c
        LEFT JOIN productos p ON c.id = p.categoria AND p.fecha_eliminacion IS NULL
        WHERE c.fecha_eliminacion IS NULL
        GROUP BY c.id
        ORDER BY total_productos DESC
    `);

    // Análisis de frecuencia de compras
    const [frecuenciaCompras] = await sequelize.query(`
        SELECT 
            CASE 
                WHEN num_compras = 1 THEN '1 compra'
                WHEN num_compras >= 2 AND num_compras <= 3 THEN '2-3 compras'
                WHEN num_compras >= 4 AND num_compras <= 6 THEN '4-6 compras'
                WHEN num_compras > 6 THEN '7+ compras'
            END as rango,
            COUNT(*) as cantidad_usuarios,
            MIN(num_compras) as orden_min
        FROM (
            SELECT usuario_id, COUNT(*) as num_compras
            FROM ordenes
            WHERE estado != 'CANCELADA'
            GROUP BY usuario_id
        ) as frecuencia
        GROUP BY rango
        ORDER BY orden_min
    `);

    // Ticket promedio
    const ticketPromedio = totalOrdenes > 0 ? ingresosTotales / totalOrdenes : 0;

    return {
        // Inventario
        totalProductos,
        valorTotalInventario,
        productosBajoStock,
        productoMasValioso,
        categoriasTop,
        distribucionValorCategorias,
        bajoStockList,
        distribucionCategorias,
        
        // Ventas
        ventasHoy,
        ingresosHoy: Number(ingresosHoy),
        ingresosTotales: Number(ingresosTotales),
        totalOrdenes,
        ticketPromedio: Number(ticketPromedio.toFixed(2)),
        promedioCompraPorUsuario: Number(promedioPorUsuario[0]?.promedio_compra || 0),
        usuariosUnicosHoy,
        
        // Productos y análisis
        productosMasVendidos,
        evolucionVentas,
        frecuenciaCompras,
    };
};

// Reporte de ventas por rango de fechas
exports.getSalesByDateRange = async (startDate, endDate) => {
    const where = { estado: { [Op.notIn]: ['CANCELADA'] } };
    
    if (startDate && endDate) {
        where.fecha_creacion = {
            [Op.gte]: new Date(startDate),
            [Op.lte]: new Date(endDate + ' 23:59:59')
        };
    }

    const ordenes = await Orden.findAll({
        where,
        include: [
            { model: Usuario, as: 'usuario', attributes: ['nombre', 'apellido', 'correo'] },
            { model: OrdenItem, as: 'items', include: [{ model: Producto, as: 'producto', attributes: ['nombre', 'sku'] }] }
        ],
        order: [['fecha_creacion', 'DESC']]
    });

    const totalIngresos = ordenes.reduce((sum, o) => sum + Number(o.total), 0);
    const totalOrdenes = ordenes.length;

    return {
        ordenes,
        totalIngresos,
        totalOrdenes,
        ticketPromedio: totalOrdenes > 0 ? (totalIngresos / totalOrdenes).toFixed(2) : 0
    };
};

// Detalle de productos vendidos por rango de fechas
exports.getProductSalesDetail = async (startDate, endDate) => {
    let dateFilter = '';
    if (startDate && endDate) {
        dateFilter = `AND o.fecha_creacion BETWEEN '${startDate}' AND '${endDate} 23:59:59'`;
    }

    const [productosVendidos] = await sequelize.query(`
        SELECT 
            p.id,
            p.nombre,
            p.sku,
            c.nombre as categoria,
            SUM(oi.cantidad) as total_cantidad,
            SUM(oi.subtotal) as total_ventas,
            AVG(oi.precio_unitario) as precio_promedio,
            COUNT(DISTINCT o.id) as cantidad_ordenes
        FROM productos p
        INNER JOIN orden_items oi ON p.id = oi.producto_id
        INNER JOIN ordenes o ON oi.orden_id = o.id
        LEFT JOIN categorias c ON p.categoria = c.id
        WHERE o.estado != 'CANCELADA'
        ${dateFilter}
        GROUP BY p.id, p.nombre, p.sku, c.nombre
        ORDER BY total_cantidad DESC
    `);

    const totalCantidad = productosVendidos.reduce((sum, p) => sum + Number(p.total_cantidad), 0);
    const totalVentas = productosVendidos.reduce((sum, p) => sum + Number(p.total_ventas), 0);

    return {
        productos: productosVendidos,
        totalProductos: productosVendidos.length,
        totalCantidad,
        totalVentas
    };
};