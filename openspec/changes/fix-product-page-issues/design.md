## Context

La página de productos en la tienda e-commerce presenta varios problemas de usabilidad que necesitan corrección: typo en texto de estado, productos relacionados mostrados de forma inconsistente, breadcrumb sin interactividad, label de cantidad confuso, y imágenes que no cargan desde el sistema local.

## Goals / Non-Goals

**Goals:**
- Corregir typo "Vendido yendido..." a "Vendido"
- Mostrar productos relacionados como cards completas (igual a página principal)
- Hacer breadcrumb clickeable con cursor pointer en hover
- Cambiar label "5 productos" a "Más de 5 productos" manteniendo funcionalidad
- Cargar imágenes desde disco local mostrar orden 0

**Non-Goals:**
- No modificar la estructura de base de datos existente
- No cambiar la lógica de carrito más allá del label
- No agregar nuevas funcionalidades de producto

## Decisiones

1. **Carga de imágenes locales**: Se usará la tabla `product_images` existente que ya tiene columnas para `image_url` y `image_order`. Se modificará la consulta para filtrar y ordenar por `image_order = 0` para mostrar la imagen principal.

2. **Display de productos relacionados**: Se reutilizará el componente de card de producto existente usado en la página principal, pasando los datos del producto relacionado de forma completa.

3. **Breadcrumb interactivo**: Se agregarán enlaces `<a>` o botones con eventos de click para cada segmento del breadcrumb, usando CSS `cursor: pointer` en hover.

4. **Label de cantidad**: Se cambiará la condición de visualización de "5 productos" a "Más de 5 productos" usando operador ternario o función de formato, sin modificar la lógica de добавление al carrito.

## Riesgos / Trade-offs

- [Riesgo] Imágenes no encontradas → Mostrar imagen por defecto (placeholder)
- [Riesgo] Productos sin imagen orden 0 → Mostrar primera imagen disponible o placeholder