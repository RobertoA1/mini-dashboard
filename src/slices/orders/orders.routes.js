'use strict';
const express = require('express');
const router = express.Router();
const controller = require('./orders.controller');
const { requireAuth } = require('../../middlewares/auth');

router.get('/', requireAuth, controller.getUserOrders);
router.get('/admin/all', requireAuth, controller.getAllOrders);
router.get('/admin/:id', requireAuth, controller.getOrderByIdAdmin);
router.get('/:id', requireAuth, controller.getOrderById);

module.exports = router;
