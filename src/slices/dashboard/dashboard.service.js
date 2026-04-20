const { Producto, Categoria, Proveedor } = require('../../models');
const { sequelize } = require('../../models');
const { Op } = require('sequelize');

exports.getKPIs = async () => {
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

    return {
        totalProductos,
        valorTotalInventario,
        productosBajoStock,
        productoMasValioso,
        categoriasTop,
        distribucionValorCategorias: distribucionValorCategorias,
        bajoStockList,
    };
};