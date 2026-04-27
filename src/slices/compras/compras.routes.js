'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./compras.controller');
const { requireAuth } = require('../../middlewares/auth');

router.post('/', requireAuth, controller.create);
router.get('/', requireAuth, controller.list);
router.get('/:id', requireAuth, controller.get);

module.exports = router;