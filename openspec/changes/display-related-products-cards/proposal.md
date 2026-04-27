## Why

 actualmente la página de detalle de producto muestra los productos relacionados directamente usando el componente `ProductCardComponent` en línea en el template. Esto dificulta el mantenimiento y la reutilización. Necesitamos un componente dedicado para mostrar productos relacionados de forma consistente.

## What Changes

- Crear componente `RelatedProductsComponent` para mostrar productos relacionados en la página de detalle
- Reemplazar el uso inline de `*ngFor` con `app-product-card` por el nuevo componente
- Mantener la estructura visual de cards existente (`ProductCardComponent`)

## Capabilities

### New Capabilities
- `related-products-display`: Componente dedicado para mostrar productos relacionados en la página de detalle

### Modified Capabilities
- Ninguno

## Impact

- Archivo: `product-detail-page.component.ts`
- Archivo nuevo: `related-products.component.ts`