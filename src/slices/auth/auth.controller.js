'use strict';

const service = require('./auth.service');

const setSessionCookie = (res, token) => {
    res.cookie('auth_token', token, service.cookieOptions);
};

exports.register = async (req, res) => {
    try {
        const result = await service.register(req.body);
        setSessionCookie(res, result.token);
        res.status(201).json({ user: result.user });
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const result = await service.login(req.body);
        setSessionCookie(res, result.token);
        res.json({ user: result.user });
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ error: error.message });
    }
};

exports.logout = async (req, res) => {
    res.clearCookie('auth_token', service.cookieOptions);
    res.json({ message: 'Sesión cerrada correctamente' });
};

exports.me = async (req, res) => {
    const user = await service.getCurrentUser(req.user.id);
    res.json({ user });
};

exports.profile = async (req, res) => {
    const profile = await service.getUserProfile(req.user.id);
    res.json({ profile });
};
