const express = require('express');
const router = express.Router();
const controller = require('./reports.controller');

router.get('/operational', controller.operational);
router.get('/management', controller.management);

module.exports = router;