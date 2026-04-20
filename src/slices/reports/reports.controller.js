const service = require('./reports.service');
const pdfGen = require('./pdfGenerator');

exports.operational = async (req, res) => {
    try {
        const { categoria } = req.query;
        const productos = await service.getProductosForReport(categoria);
        let categoriaNombre = null;
        if (categoria) {
            const cat = await require('../../models').Categoria.findByPk(categoria);
            categoriaNombre = cat?.nombre;
        }
        const pdf = await pdfGen.generateOperationalReport(productos, categoriaNombre);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.management = async (req, res) => {
    try {
        const { kpis, productos } = await service.getManagementData();
        const pdf = await pdfGen.generateManagementReport(kpis, productos);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};