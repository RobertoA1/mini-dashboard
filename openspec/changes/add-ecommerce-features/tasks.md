## 1. Backend - Modelos y Base de Datos

- [x] 1.1 Crear modelo de Usuario (User) con campos: id, email, password, name, lastname, address, role, createdAt
- [x] 1.2 Crear modelo de Carrito (Cart) con campos: id, userId, products[], updatedAt
- [x] 1.3 Crear modelo de Compra (Purchase) con campos: id, userId, productId, productName, productImage, productDescription, price, purchaseDate
- [x] 1.4 Crear modelo de Producto (Product) con campos: id, name, description, price, image, category, freeShipping
- [x] 1.5 Crear script de seed con 5 clientes y 2 administradores

## 2. Backend - Autenticación

- [x] 2.1 Implementar endpoint de registro POST /api/auth/register
- [x] 2.2 Implementar endpoint de login POST /api/auth/login
- [x] 2.3 Implementar endpoint de logout POST /api/auth/logout
- [x] 2.4 Implementar middleware de autenticación JWT
- [x] 2.5 Implementar endpoint de perfil GET /api/user/profile

## 3. Backend - Carrito

- [x] 3.1 Implementar endpoint GET /api/cart para obtener carrito del usuario
- [x] 3.2 Implementar endpoint POST /api/cart/add para agregar producto
- [x] 3.3 Implementar endpoint POST /api/cart/remove para eliminar producto
- [x] 3.4 Implementar endpoint POST /api/cart/clear para vaciar carrito

## 4. Backend - Compras

- [x] 4.1 Implementar endpoint POST /api/purchase para crear compra
- [x] 4.2 Implementar endpoint GET /api/purchases para obtener historial de compras
- [x] 4.3 Implementar endpoint GET /api/products para listar productos por categoría
- [x] 4.4 Implementar endpoint GET /api/products/:id para obtener producto específico

## 5. Frontend - Estilos y Configuración

- [x] 5.1 Definir variables CSS para colores principales (#9fb8ad, #475841)
- [x] 5.2 Definir variables CSS para colores secundarios (#e6e8e6, #ced0ce, #3f403f)
- [x] 5.3 Aplicar colores a componentes existentes

## 6. Frontend - Header

- [x] 6.1 Actualizar header para mostrar categorías
- [x] 6.2 Actualizar header para mostrar "Iniciar Sesión / Regístrate" si no hay sesión
- [x] 6.3 Implementar mostrar dirección con "Enviar a {direccion}"
- [x] 6.4 Actualizar para mostrar nombre de usuario (max 12 chars) cuando hay sesión
- [x] 6.5 Implementar dropdown con "Cuenta" y "Salir" al hacer click en usuario
- [x] 6.6 Reemplazar texto "Carrito" con icono/logo de carrito

## 7. Frontend - Página Principal

- [x] 7.1 Implementar carruseles de productos por categoría
- [x] 7.2 Mostrar nombre de categoría centrado encima de cada carrusel
- [x] 7.3 Eliminar sidebar de página principal
- [x] 7.4 Implementar mensaje de envío gratis "Llega gratis entre el {fecha} y {fecha}"

## 8. Frontend - Página de Producto

- [x] 8.1 Eliminar botón "Agregar al carrito", solo mostrar "Comprar ahora"
- [x] 8.2 Hacer botón "Ver producto" en productos relacionados no funcional

## 9. Frontend - Mis Compras

- [x] 9.1 Crear página Mis Compras
- [x] 9.2 Mostrar foto, nombre y descripción del producto
- [x] 9.3 Mostrar fecha en formato "Comprado el {dd/MM/yyyy}"
- [x] 9.4 Implementar botón "Volver a comprar" que redirige al producto
- [x] 9.5 Ordenar compras desde la más reciente a la más antigua

## 10. Frontend - Página de Cuenta

- [x] 10.1 Crear página de perfil de usuario
- [x] 10.2 Mostrar name, lastname, email y address del usuario

## 11. Integración y Pruebas

- [x] 11.1 Conectar frontend con endpoints de autenticación
- [x] 11.2 Conectar carrito con endpoints de carrito
- [x] 11.3 Conectar Mis Compras con endpoint de compras
- [ ] 11.4 Probar flujo completo: registro, login, agregar al carrito, comprar, ver historial
- [ ] 11.5 Probar persistencia del carrito al cerrar y abrir sesión
- [ ] 11.6 Verificar colores y diseño visual