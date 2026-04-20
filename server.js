require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { sequelize } = require('./src/models');

// Importar rutas de slices
const productosRoutes = require('./src/slices/productos/productos.routes');
const categoriasRoutes = require('./src/slices/categorias/categorias.routes');
const proveedoresRoutes = require('./src/slices/proveedores/proveedores.routes');
const dashboardRoutes = require('./src/slices/dashboard/dashboard.routes');
const reportsRoutes = require('./src/slices/reports/reports.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Motor de vistas EJS
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Rutas API
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportsRoutes);

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