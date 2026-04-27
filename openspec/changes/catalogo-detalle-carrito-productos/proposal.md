## Why

La tienda ya muestra productos, pero todavía mezcla la compra con el resumen del catálogo y no comunica bien condiciones comerciales como descuentos, cuotas o envío. Además, el esquema de datos actual no cubre todos los atributos necesarios para mostrar y calcular esas reglas de forma consistente.

## What Changes

- La página principal mostrará únicamente un resumen de producto: nombre, precio, descuento aplicable y señales comerciales.
- Se quitará el acceso al carrito desde la card del catálogo principal; la acción de compra quedará solo en la página de detalle.
- La página de detalle del producto mostrará toda la información de compra, el CTA de compra, el CTA para agregar al carrito, la promesa de envío gratis cuando aplique y productos relacionados debajo del contenido principal.
- El carrito mostrará subtotal de productos, subtotal de envíos, cupón, descuento aplicado, total final y un botón para continuar al siguiente paso de pago.
- Se reforzará el esquema de base de datos para asegurar que existan las tablas y columnas necesarias para productos, carrito, descuentos, cupones, envío y reglas comerciales; si falta algo, se creará.

## Capabilities

### New Capabilities
- `catalogo-principal-productos`: tarjeta de resumen en la página principal sin acciones de carrito.
- `detalle-producto-compras`: página del producto con CTA de compra, envío, devoluciones y productos relacionados.
- `carrito-compras-avanzado`: vista de carrito con subtotal, envío, cupón, descuento, total y continuar.
- `esquema-datos-tienda`: validación y ampliación del esquema de BD para soportar los datos comerciales requeridos.

### Modified Capabilities

## Impact

Afecta la tienda Angular, el servicio de productos, el motor de carrito, las migraciones/modelos de base de datos y las reglas de presentación de producto. También impacta el cálculo de precios y la navegación de compra, porque la entrada al carrito se moverá desde el catálogo a la página de detalle.
