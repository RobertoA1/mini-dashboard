## Why

La página de productos actualmente tiene varios problemas de UX/UI que afectan la experiencia del usuario: typos, estilos inconsistentes en las cards de productos relacionados, breadcrumb no clickeable, lógica de cantidad confusa, y las imágenes no se cargan correctamente desde el disco local. Estos problemas deben corregirse para mejorar la usabilidad y funcionalidad de la tienda.

## What Changes

- Corregir typo "Vendido yendido..." por "Vendido"
- Mostrar productos relacionados como cards completas (igual que en página principal)
- Hacer el breadcrumb (Inicio > {categoria} > {producto}) clickeable con cursor pointer en hover
- Cambiar label "5 productos" a "Más de 5 productos" manteniendo funcionalidad de agregar 5 al carrito
- Cargar imágenes de productos desde disco local usando URLs locales en tabla product_images
- Mostrar imagen con orden 0 en las cards de producto

## Capabilities

### New Capabilities

- `product-image-local-loader`: Carga de imágenes de productos desde disco local mostrando la imagen con orden 0
- `product-card-display`: Cards de producto muestran imagen principal (orden 0), precio, nombre y botón agregar

### Modified Capabilities

- `product-page-ui`: Correcciones de UI en página de producto (typo, breadcrumb clickeable, label de cantidad)
- `related-products-display`: Productos relacionados mostrados como cards completas

## Impact

- Archivo de vista de página de producto
- Componente de card de producto
- Sistema de carga de imágenes locales
- Tabla product_images para almacenar URLs locales