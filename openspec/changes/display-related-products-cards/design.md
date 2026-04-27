## Context

Actualmente el template de `ProductDetailPageComponent` usa un `*ngFor` directo para renderizar productos relacionados con `<app-product-card>`:

```html
<section *ngIf="relatedProducts.length > 0">
  <h2>Productos relacionados</h2>
  <div class="grid...">
    <app-product-card *ngFor="let related of relatedProducts" [product]="related"></app-product-card>
  </div>
</section>
```

Esta estructura está mezclada con la lógica de la página de detalle.

## Goals / Non-Goals

**Goals:**
- Extraer la lógica de productos relacionados a un componente dedicado
- Mantener la interfaz visual existente con `ProductCardComponent`
- Permitir reutilización en otras páginas

**Non-Goals:**
- No agregar nueva funcionalidad de negocio
- No modificar el diseño visual de las cards

## Decisions

1. **Crear `RelatedProductsComponent`** en lugar de modificar existente
   - Rationale: Mantiene el principio de responsabilidad única y permite cambios futuros sin afectar la página de detalle

2. **Usar Grid de CSS** en lugar de biblioteca de UI
   - Rationale: El proyecto ya usa CSS/Tailwind, mantener consistencia

3. **Aceptar `products` como Input**
   - Rationale: Componente controlado por el padre, flexible para cualquier origen de datos

## Risks / Trade-offs

- [Bajo] El componente será pequeño, riesgo mínimo
- [Trade-off] Una capa adicional de abstracción que puede ser innecesaria si solo se usa en un lugar
  - Mitigation: La arquitectura permite futuras extensiones (lazy load, filtros, etc.)