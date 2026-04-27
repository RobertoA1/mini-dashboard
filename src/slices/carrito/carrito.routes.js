'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./carrito.controller');
const { requireAuth } = require('../../middlewares/auth');

router.post('/calcular', controller.calculate);

router.use(requireAuth);

router.get('/', controller.getCart);
router.post('/items', controller.addItem);
router.patch('/items/:productoId', controller.updateItem);
router.delete('/items/:productoId', controller.removeItem);
router.post('/import', controller.importItems);

module.exports = router;
