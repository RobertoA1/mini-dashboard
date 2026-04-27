## Why

El proyecto requiere expandir funcionalidades de comercio electrónico para incluir gestión completa de usuarios/clientes, un sistema de compras con carrito persistente, página de productos, y mejoras visuales al header. Estas funcionalidades son esenciales para una experiencia de compra completa.

## What Changes

### Header
- Usuario en header reemplaza a "Salir" - muestra nombre y apellido (máx 12 letras, truncado con '...' si es mayor)
- Click en nombre de usuario muestra dropdown con opciones: "Cuenta" y "Salir"
- "Cuenta" abre página separada con datos del usuario
- "Salir" cierra sesión
- Logo de carrito reemplaza opción "Carrito" en header
- Categorías se muestran en header
- Si no hay sesión: mostrar "Iniciar Sesión / Regístrate"
- Dirección con mensaje "Enviar a {direccion}"

### Página Principal
- Carrusel de cards clasificado por categoría de productos
- Nombre de categoría centrado encima de cada carrusel
- No tiene sidebar
- Si producto tiene envío gratis: mostrar "Llega gratis entre el {1 día después de hoy} y {5 días después de hoy}"

### Página de Producto
- No tiene opción "Agregar al carrito", solo "Comprar ahora"
- Productos relacionados: botón "Ver producto" no redirige a página del producto

### Mis Compras
- Muestra foto, nombre y descripción del producto comprado
- Fecha de compra formato "Comprado el {dd/MM/yyyy}"
- Botón "Volver a comprar" que redirige a página del producto
- Ordenado desde compra más nueva a más antigua

### Carrito de Compras
- El carrito se vacía visualmente para el usuario al cerrar sesión
- Los datos del carrito se mantienen en el servidor
- Datos se recuperan al iniciar sesión nuevamente

### Colores
- Color principal: #9fb8ad y #475841
- Colores secundarios: #e6e8e6, #ced0ce, #3f403f

### Seed de Datos
- 5 cuentas seedeadas en Cliente
- 2 cuentas seedeadas en Administrador

## Capabilities

### New Capabilities
- `user-auth`: Sistema de autenticación con login, registro, cierre de sesión, gestión de cuenta
- `user-profile`: Página de perfil de usuario con sus datos
- `shopping-cart`: Carrito de compras persistente en servidor
- `purchase-history`: Historial de compras del usuario ("Mis compras")
- `product-catalog`: Listado de productos por categoría con carruseles

### Modified Capabilities
- Ninguno (proyecto nuevo)

## Impact

- Frontend: Actualización de componentes de header, páginas principales, producto, Mis Compras
- Backend: Endpoints de autenticación, gestión de usuario, carrito, compras
- Base de datos: Modelos de usuario, carrito, purchases
-.seed: Datos inicial para clientes y administradores