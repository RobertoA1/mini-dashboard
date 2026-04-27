## 1. Correcciones de UI en página de producto

- [x] 1.1 Corregir typo "Vendido yendido por CompraEnUna" a "Vendido por CompraEnUna" (línea 96)
- [x] 1.2 Hacer breadcrumb clickeable: agregar cursor pointer y eventos click a categoría
- [x] 1.3 Cambiar label cantidad "5 unidades" a "Más de 5 productos" manteniendo funcionalidad de agregar 5

## 2. Carga de imágenes desde disco local

- [x] 2.1 Modificar loadProduct() para filtrar imagen con image_order = 0 como principal
- [x] 2.2 Actualizar selectedImage para usar imagen con menor orden
- [x] 2.3 Verificar que las imágenes se carguen desde URLs locales en product_images

## 3. Productos relacionados como cards completas

- [x] 3.1 Importar ProductCardComponent en product-detail-page.component.ts
- [x] 3.2 Reemplazartemplate de productos relacionados para usar product-card
- [x] 3.3 Asegurar que cada card muestre imagen con orden 0 del producto

## 4. Verificación

- [x] 4.1 Verificar typo corregido en texto de entrega
- [x] 4.2 Verificar breadcrumb clickeable con cursor pointer
- [x] 4.3 Verificar label muestra "Más de 5 productos"
- [x] 4.4 Verificar imágenes cargan desde disco local
- [x] 4.5 Verificar productos relacionados se ven como cards completas