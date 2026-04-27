## Context

El proyecto es una aplicación Angular para una tienda online. Actualmente existe una página principal que muestra productos en cards y necesita mejoras en la experiencia de usuario. No existe una página para ver todos los cupones activos.

## Goals / Non-Goals

**Goals:**
- Corregir el typo "provoked" en la página principal
- Crear una página "/cupones" que muestre todos los cupones activos
- Mejorar la experiencia de usuario al hacer clic en las cards de productos (redirigir a detalle)
- Simplificar la interfaz removiendo texto innecesario de las cards

**Non-Goals:**
- Cambiar el estilo visual general de la aplicación
- Modificar la lógica de negocio de los cupones
- Cambiar la estructura de datos de productos

## Decisions

### Implementación de la página de cupones
- **Opción A**: Crear un nuevo componente standalone con su propio servicio para obtener cupones
- **Opción B**: Extender el servicio existente de productos para incluir cupones
- **Decisión**: Opción A - crear un nuevo componente `CouponsPageComponent` y servicio `CouponService` para mantener separación de responsabilidades
- **Razón**: Los cupones son un dominio diferente de los productos y pueden tener su propia lógica de obtención y presentación

### Manejo del clic en cards de productos
- **Opción A**: Usar `(click)` en el contenedor de la card
- **Opción B**: Envuelver la card en un `<a>` que enlace a `/producto/{id}`
- **Decisión**: Opción B - usar anchor tag para mejor accesibilidad y SEO
- **Razón**: Los anchors son semánticamente correctos para navegación y funcionan con clic derecho, middle-click, etc.

### Corrección del typo
- **Decisión**: Búsqueda directa y reemplazo del texto "provoked" por el correcto
- **Razón**: Cambio trivial que no requiere análisis adicional

## Risks / Trade-offs

[Posible conflicto de rutas] → Verificar que la ruta `/cupones` no colapse con rutas existentes
[Duplicación de código] → El nuevo servicio de cupones podría compartir lógica con el servicio de productos si en el futuro se necesitan características similares
[Impacto mínimo en performance] → Las cambios son principalmente de presentación y navegación, sin impacto significativo en rendimiento