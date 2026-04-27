'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../../models');
const { JWT_SECRET, buildUserPayload } = require('../../middlewares/auth');

const cookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
};

const toPublicUser = (usuario) => buildUserPayload(usuario);

const validateRegistration = ({ nombre, correo, password }) => {
    if (!nombre || !correo || !password) {
        const error = new Error('Nombre, correo y contraseña son obligatorios.');
        error.statusCode = 400;
        throw error;
    }
};

exports.cookieOptions = cookieOptions;

exports.register = async ({ nombre, apellido, correo, password, direccion }) => {
    validateRegistration({ nombre, correo, password });

    const existing = await Usuario.findOne({ where: { correo } });
    if (existing) {
        const error = new Error('El correo ya está registrado.');
        error.statusCode = 400;
        throw error;
    }

    const password_hash = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({
        nombre,
        apellido: apellido || null,
        correo,
        password_hash,
        direccion: direccion || null,
        rol: 'usuario',
    });

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '7d' });

    return {
        token,
        user: toPublicUser(usuario),
    };
};

exports.login = async ({ correo, password }) => {
    if (!correo || !password) {
        const error = new Error('Correo y contraseña son obligatorios.');
        error.statusCode = 400;
        throw error;
    }

    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
        const error = new Error('Credenciales inválidas.');
        error.statusCode = 401;
        throw error;
    }

    const ok = await bcrypt.compare(password, usuario.password_hash);
    if (!ok) {
        const error = new Error('Credenciales inválidas.');
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '7d' });

    return {
        token,
        user: toPublicUser(usuario),
    };
};

exports.getCurrentUser = async (id) => {
    const usuario = await Usuario.findByPk(id, {
        attributes: ['id', 'nombre', 'apellido', 'correo', 'direccion', 'rol'],
    });

    return usuario ? toPublicUser(usuario) : null;
};

exports.getUserProfile = async (id) => {
    const usuario = await Usuario.findByPk(id, {
        attributes: ['id', 'nombre', 'apellido', 'correo', 'direccion', 'rol', 'fecha_creacion'],
    });

    if (!usuario) return null;

    return {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        direccion: usuario.direccion,
        rol: usuario.rol,
        fechaCreacion: usuario.fecha_creacion,
    };
};
