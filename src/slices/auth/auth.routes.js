'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const { requireAuth } = require('../../middlewares/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.get('/me', requireAuth, controller.me);
router.get('/profile', requireAuth, controller.profile);

module.exports = router;
