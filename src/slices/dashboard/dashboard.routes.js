const express = require('express');
const router = express.Router();
const controller = require('./dashboard.controller');

router.get('/kpis', controller.getKPIs);

module.exports = router;