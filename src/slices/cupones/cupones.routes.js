'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./cupones.controller');

router.post('/validar', controller.validate);
router.get('/dia', controller.getCouponOfTheDay);
router.get('/activos', controller.getActiveCoupons);

module.exports = router;
