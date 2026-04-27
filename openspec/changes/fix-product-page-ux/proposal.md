## Why

La página de producto necesita mejoras de UX: productos relacionados no clickeables, agregar marca y estado al producto, selector de cantidad, mensaje de envío mejorado, modal de agregar al carrito con productos de marca, y cambios en el carrito. También corregir display del nombre de usuario en header.

## What Changes

- Productos relacionados: "Ver producto" deshabilitado
- Agregar campo "marca" (de proveedor) y "estado" (Nuevo/Usado) al producto
- Selector de cantidad: 1-5 unidades o "Más de 5"
- Mensaje de envío: formato "dd de MM" con color verde si envio_gratis
- Agregar productos de marca en carrusel debajo del producto
- Links "Ver más de [Marca]" y "Ver más de [categoría]" arriba del producto
- Modal "Agregaste a tu carrito" con productos de la marca
- Carrito: no permitir cantidad < 1, usar icono de basura
- Nombre producto en carrito: "[marca] | [nombre]"
- Header: usuario hasta 10 letras sin espacios

## Capabilities

### Modified Capabilities
- `product-catalog`: Agregar marca, estado, selector cantidad, modal add to cart
- `shopping-cart`: Cambiar UI de eliminar, formato nombre
- `user-profile`: Display truncado a 10 letras

## Impact

- Frontend Angular (product-detail, cart-page, app-component)
- Modelo Producto (agregar campo estado)
- Migración para campo estado