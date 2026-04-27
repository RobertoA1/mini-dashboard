const service = require('./dashboard.service');

exports.getKPIs = async (req, res) => {
    try {
        const data = await service.getKPIs();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSalesByDateRange = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const data = await service.getSalesByDateRange(startDate, endDate);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductSalesDetail = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const data = await service.getProductSalesDetail(startDate, endDate);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};