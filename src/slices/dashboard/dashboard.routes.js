const express = require('express');
const router = express.Router();
const controller = require('./dashboard.controller');

router.get('/kpis', controller.getKPIs);
router.get('/sales', controller.getSalesByDateRange);
router.get('/product-sales', controller.getProductSalesDetail);

module.exports = router;