'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./checkout.controller');
const { requireAuth } = require('../../middlewares/auth');

router.post('/', requireAuth, controller.placeOrder);

module.exports = router;
