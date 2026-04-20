// Para pdfmake 0.3.x, la importación correcta es:
const PdfPrinter = require('pdfmake');

// Configuración de fuentes (usamos las fuentes estándar)
const fonts = {
  Roboto: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  }
};

const printer = new PdfPrinter(fonts);

// Función auxiliar para generar el PDF a partir de la definición del documento
function generatePDF(docDefinition) {
  return new Promise((resolve, reject) => {
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const chunks = [];
    pdfDoc.on('data', chunk => chunks.push(chunk));
    pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
    pdfDoc.on('error', reject);
    pdfDoc.end();
  });
}

// Colores de la marca
const primaryColor = '#251f47';
const secondaryColor = '#404e7c';
const accentColor = '#260f26';

exports.generateOperationalReport = async (productos, categoriaFiltro) => {
  const now = new Date().toLocaleDateString();

  const docDefinition = {
    pageMargins: [40, 60, 40, 60],
    header: {
      text: 'Reporte Operacional de Productos',
      style: 'header'
    },
    content: [
      categoriaFiltro ? { text: `Categoría: ${categoriaFiltro}`, style: 'subheader' } : {},
      { text: `Fecha de generación: ${now}`, style: 'date' },
      { text: '\n' },
      {
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto'],
          body: [
            [
              { text: 'SKU', style: 'tableHeader' },
              { text: 'Nombre', style: 'tableHeader' },
              { text: 'Stock Actual', style: 'tableHeader' },
              { text: 'Valor Total (compra)', style: 'tableHeader' }
            ],
            ...productos.map(p => [
              p.sku,
              p.nombre,
              p.stock_actual.toString(),
              `S/ ${(p.stock_actual * p.precio_compra).toFixed(2)}`
            ])
          ]
        }
      },
      { text: `\nTotal de productos: ${productos.length}`, style: 'footer' }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        color: primaryColor,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 14,
        color: secondaryColor,
        margin: [0, 0, 0, 5]
      },
      date: {
        fontSize: 10,
        color: '#666',
        margin: [0, 0, 0, 10]
      },
      tableHeader: {
        bold: true,
        fillColor: secondaryColor,
        color: 'white',
        alignment: 'left',
        margin: [0, 5, 0, 5]
      },
      footer: {
        fontSize: 10,
        color: '#666',
        alignment: 'right',
        margin: [0, 20, 0, 0]
      }
    },
    defaultStyle: {
      fontSize: 10
    }
  };

  return await generatePDF(docDefinition);
};

exports.generateManagementReport = async (kpis, productos) => {
  const now = new Date().toLocaleDateString();

  const kpiCards = [
    { label: 'Total Productos Únicos', value: kpis.totalProductos.toString() },
    { label: 'Valor Total del Inventario', value: `S/ ${parseFloat(kpis.valorTotalInventario).toFixed(2)}` },
    { label: 'Productos Bajo Stock', value: kpis.productosBajoStock.toString() },
    { label: 'Producto Más Valioso', value: kpis.productoMasValioso?.nombre || 'N/A' }
  ];

  const categoriasTopRows = kpis.categoriasTop.map(cat => [cat.nombre, cat.total.toString()]);
  const bajoStockRows = kpis.bajoStockList.slice(0, 10).map(p => [p.sku, p.nombre, p.stock_actual.toString(), p.stock_minimo.toString()]);
  const productosRows = productos.map(p => [
    p.sku,
    p.nombre,
    p.categoriaRel?.nombre || '',
    p.proveedorRel?.nombre || '',
    p.stock_actual.toString(),
    `S/ ${p.precio_venta}`
  ]);

  const docDefinition = {
    pageMargins: [40, 60, 40, 60],
    header: {
      text: 'Reporte de Gestión',
      style: 'header'
    },
    content: [
      { text: `Fecha de generación: ${now}`, style: 'date' },
      { text: '\n' },
      { text: 'Indicadores Clave (KPIs)', style: 'sectionHeader' },
      {
        columns: kpiCards.map(card => ({
          stack: [
            { text: card.label, style: 'kpiLabel' },
            { text: card.value, style: 'kpiValue' }
          ],
          width: 'auto',
          margin: [0, 5, 20, 5]
        }))
      },
      { text: '\n' },
      { text: 'Top 10 Categorías con Más Productos', style: 'sectionHeader' },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto'],
          body: [
            [
              { text: 'Categoría', style: 'tableHeader' },
              { text: 'Cantidad', style: 'tableHeader' }
            ],
            ...categoriasTopRows
          ]
        }
      },
      { text: '\n' },
      { text: 'Productos que Necesitan Reorden (Bajo Stock)', style: 'sectionHeader' },
      {
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto'],
          body: [
            [
              { text: 'SKU', style: 'tableHeader' },
              { text: 'Nombre', style: 'tableHeader' },
              { text: 'Stock Actual', style: 'tableHeader' },
              { text: 'Stock Mínimo', style: 'tableHeader' }
            ],
            ...bajoStockRows
          ]
        }
      },
      bajoStockRows.length === 0 ? { text: 'No hay productos bajo stock', style: 'info' } : {},
      kpis.bajoStockList.length > 10 ? { text: `... y ${kpis.bajoStockList.length - 10} productos más.`, style: 'info' } : {},
      { text: '\n' },
      { text: 'Listado Completo de Productos Activos', style: 'sectionHeader' },
      {
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto'],
          body: [
            [
              { text: 'SKU', style: 'tableHeader' },
              { text: 'Nombre', style: 'tableHeader' },
              { text: 'Categoría', style: 'tableHeader' },
              { text: 'Proveedor', style: 'tableHeader' },
              { text: 'Stock', style: 'tableHeader' },
              { text: 'Precio Venta', style: 'tableHeader' }
            ],
            ...productosRows
          ]
        }
      },
      { text: `\nTotal de productos activos: ${productos.length}`, style: 'footer' }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        color: primaryColor,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      date: {
        fontSize: 10,
        color: '#666',
        margin: [0, 0, 0, 10],
        alignment: 'right'
      },
      sectionHeader: {
        fontSize: 14,
        bold: true,
        color: secondaryColor,
        margin: [0, 15, 0, 5]
      },
      kpiLabel: {
        fontSize: 10,
        color: '#666'
      },
      kpiValue: {
        fontSize: 16,
        bold: true,
        color: accentColor
      },
      tableHeader: {
        bold: true,
        fillColor: secondaryColor,
        color: 'white',
        alignment: 'left',
        margin: [0, 5, 0, 5]
      },
      info: {
        fontSize: 10,
        italics: true,
        color: '#666',
        margin: [0, 5, 0, 5]
      },
      footer: {
        fontSize: 10,
        color: '#666',
        alignment: 'right',
        margin: [0, 20, 0, 0]
      }
    },
    defaultStyle: {
      fontSize: 10
    }
  };

  return await generatePDF(docDefinition);
};