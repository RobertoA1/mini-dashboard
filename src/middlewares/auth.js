'use strict';

const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-jwt-secret';

const buildUserPayload = (usuario) => ({
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol,
});

const readToken = (req) => {
    const header = req.headers.authorization;
    if (header && header.startsWith('Bearer ')) {
        return header.slice(7);
    }

    return req.cookies?.auth_token || null;
};

const requireAuth = async (req, res, next) => {
    const token = readToken(req);
    if (!token) {
        return res.status(401).json({ error: 'No autenticado' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const usuario = await Usuario.findByPk(decoded.id, {
            attributes: ['id', 'nombre', 'correo', 'rol'],
        });

        if (!usuario) {
            return res.status(401).json({ error: 'No autenticado' });
        }

        req.user = buildUserPayload(usuario);
        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Sesión inválida o expirada' });
    }
};

const requireRole = (...roles) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: 'No autenticado' });
    }

    if (!roles.includes(req.user.rol)) {
        return res.status(403).json({ error: 'No autorizado' });
    }

    return next();
};

module.exports = {
    JWT_SECRET,
    buildUserPayload,
    requireAuth,
    requireRole,
};
