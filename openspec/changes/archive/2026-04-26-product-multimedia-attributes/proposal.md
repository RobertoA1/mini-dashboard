## Why

La página de producto necesita mejoras significativas para una mejor experiencia de usuario y para soportar datos más flexibles de productos. Actualmente tiene valores hardcodeados de características técnicas, no soporta múltiples fotos por producto, y muestra información que no debería verse al cliente como el SKU.

## What Changes

- Permitir que varias fotos pertenezcan a un producto, cada foto con un orden y un tipo (card o página de detalle)
- Agregar soporte de atributos de producto (procesador, memoria, etc. como personalizables en lugar de hardcodeados)
- Agregar padding a la página de producto para que el contenido no toque los bordes del HTML
- Para productos con envío gratis, mostrar mensaje "Llega FREE entre el..."
- Ocultar el SKU de la página de producto (no mostrar al cliente)
- Mostrar la cantidad de vendidos en la página de producto
- Hacer que las fotos del producto sean seleccionables en la página de detalle

## Capabilities

### New Capabilities
- `product-images`: Soporte múltiples fotos por producto, distinguidas por tipo y orden
- `product-attributes`: Soporte de atributos de producto (pares clave-valor personalizables)

### Modified Capabilities
- `product-page`: Página de detalle de producto con nuevo layout y comportamiento
- `product-display`: Lógica de display de producto actualizada

## Impact

- Componente de página de detalle de producto
- Lógica de almacenamiento y display de imagens de producto
- Migraciones de base de datos
- Respuestas de API de producto