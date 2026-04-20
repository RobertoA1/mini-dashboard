const service = require('./dashboard.service');

exports.getKPIs = async (req, res) => {
    try {
        const data = await service.getKPIs();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};