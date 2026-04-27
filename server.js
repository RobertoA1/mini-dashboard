require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const { sequelize } = require('./src/models');

// Importar rutas de slices
const authRoutes = require('./src/slices/auth/auth.routes');
const comprasRoutes = require('./src/slices/compras/compras.routes');
const carritoRoutes = require('./src/slices/carrito/carrito.routes');
const cuponesRoutes = require('./src/slices/cupones/cupones.routes');
const productosRoutes = require('./src/slices/productos/productos.routes');
const categoriasRoutes = require('./src/slices/categorias/categorias.routes');
const proveedoresRoutes = require('./src/slices/proveedores/proveedores.routes');
const dashboardRoutes = require('./src/slices/dashboard/dashboard.routes');
const reportsRoutes = require('./src/slices/reports/reports.routes');
const checkoutRoutes = require('./src/slices/checkout/checkout.routes');
const ordersRoutes = require('./src/slices/orders/orders.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de uploads
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes (JPEG, PNG, WebP, GIF)'), false);
        }
    }
});

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para subir imágenes
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }
    // Devolver URL relativa para acceder desde la misma web
    const imageUrl = '/uploads/' + req.file.filename;
    res.json({ 
        success: true, 
        url: imageUrl,
        filename: req.file.filename,
        size: req.file.size
    });
});

// Motor de vistas EJS
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/cupones', cuponesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/orders', ordersRoutes);

// Proxy /tienda/api/* -> /api/*
app.use('/tienda/api/auth', authRoutes);
app.use('/tienda/api/compras', comprasRoutes);
app.use('/tienda/api/carrito', carritoRoutes);
app.use('/tienda/api/cupones', cuponesRoutes);
app.use('/tienda/api/productos', productosRoutes);
app.use('/tienda/api/categorias', categoriasRoutes);
app.use('/tienda/api/proveedores', proveedoresRoutes);
app.use('/tienda/api/dashboard', dashboardRoutes);
app.use('/tienda/api/reports', reportsRoutes);
app.use('/tienda/api/checkout', checkoutRoutes);
app.use('/tienda/api/orders', ordersRoutes);

// Tienda pública Angular
app.get('/tienda', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tienda', 'index.html'));
});
app.get('/tienda/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tienda', 'index.html'));
});

// Manejo de errores de multer
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'Archivo demasiado grande. Máximo 5MB.' });
        }
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

// Ruta SSR para servir la aplicación React
app.get('*', (req, res) => {
    res.render('index', { title: 'Sistema de Gestión de Productos' });
});

// Sincronizar BD y arrancar servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
