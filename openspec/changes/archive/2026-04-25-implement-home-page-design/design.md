## Context

Nueva página home basada en HTML proporcionado. Sistema existente tiene categorías, productos, cupones, usuarios en BD.

## Goals / Non-Goals

**Goals:**
- Implementar página home con nueva estructura
- Agregar campo es_del_dia a Cupon
- Cargar categorías desde BD
- Mostrar usuario desde sesión

**Non-Goals:**
- Nuevas páginas (categorías, ofertas, cupones, ayuda) - solo placeholders
- Reseñas - placeholder 4 estrellas

## Decisions

- Usar Tailwind CSS como en el template
- Endpoint para obtener cupón del día
- Endpoint para productos destacados (limit 4)
- Endpoint para categorías

## Migration Plan

1. Crear migración para agregar es_del_dia a cupones
2. Actualizar modelo Cupon
3. Crear nuevo componente home-page
4. Configurar ruta / para usar nuevo componente

## Risks / Trade-offs

- [Riesgo] No hay cupón del día → Mostrar mensaje por defecto