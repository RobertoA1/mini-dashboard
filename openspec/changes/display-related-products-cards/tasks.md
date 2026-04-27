## 1. Crear componente RelatedProductsComponent

- [x] 1.1 Crear archivo `related-products.component.ts` en `src/app/components/`
- [x] 1.2 Definir Input `products` de tipo `PublicProduct[]`
- [x] 1.3 Implementar template con grid y ProductCardComponent

## 2. Actualizar ProductDetailPageComponent

- [x] 2.1 Importar RelatedProductsComponent
- [x] 2.2 Reemplazar *ngFor inline por `<app-related-products [products]="relatedProducts">`
- [x] 2.3 Eliminar código relacionado del template

## 3. Verificación

- [x] 3.1 Compilar el proyecto sin errores
- [x] 3.2 Verificar que la página de producto muestre las cards correctamente