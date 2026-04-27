## 1. Esquema de datos y catálogo comercial

- [x] 1.1 Definir y migrar los campos de merchandising de producto para descuento, cuotas sin interés y envío gratis
- [x] 1.2 Crear las tablas o columnas faltantes para cupones y reglas de envío
- [x] 1.3 Verificar que las tablas existentes de productos, usuarios y carrito sigan disponibles sin romper datos previos

## 2. API y cálculo de negocio

- [x] 2.1 Exponer en la API pública de productos los datos comerciales necesarios para la home y el detalle
- [x] 2.2 Implementar en la API del carrito el cálculo de subtotal de productos, subtotal de envío, cupón y total final
- [x] 2.3 Agregar validación de cupones por tipo, vigencia y estado activo
- [x] 2.4 Resolver productos relacionados con base en productos activos de la misma categoría

## 3. Tienda Angular: catálogo y detalle

- [x] 3.1 Actualizar la card de la página principal para mostrar solo resumen, descuento, cuotas y envío gratis
- [x] 3.2 Eliminar la acción de carrito desde la card del catálogo principal
- [x] 3.3 Actualizar la página de detalle para mostrar envío gratis, descripción, devolución gratis y CTAs de compra
- [x] 3.4 Mostrar productos relacionados debajo del contenido principal del producto

## 4. Tienda Angular: carrito

- [x] 4.1 Agregar al carrito la vista de subtotal de productos, subtotal de envíos y total final
- [x] 4.2 Permitir ingresar un cupón y recalcular el total según porcentaje o monto fijo
- [x] 4.3 Mostrar el estado "GRATIS" cuando el envío no tenga costo
- [x] 4.4 Mantener el botón Continuar hacia el paso futuro de selección de pago
- [x] 4.5 Mostrar el mensaje de compra protegida en el carrito

## 5. Verificación final

- [x] 5.1 Validar que la home no exponga acciones de carrito
- [x] 5.2 Validar que la compra solo arranque desde la página del producto
- [x] 5.3 Confirmar que el build de la tienda Angular y el panel React sigan compilando
