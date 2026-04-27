## Context

Proyecto e-commerce con Angular frontend y Express backend. Ya existen modelos de usuario, producto, carrito. Necesitamos agregar campos nuevos y mejorar UX.

## Goals / Non-Goals

**Goals:**
- Agregar campo "estado" a Producto (Nuevo/Usado)
- Implementar selector de cantidad con dropdown
- Crear modal "Agregaste a tu carrito" con productos de marca
- Corregir display usuario: 10 letras sin espacios
- Cambiar botón eliminar por icono de basura en carrito

**Non-Goals:**
- Sistema de pagos
- Notificaciones email
- Reseñas de productos

## Decisions

- Campo "estado" como ENUM('Nuevo', 'Usado') en Producto
- Proveedor se usará como "marca" (ya existe relación)
- Cantidad mínima siempre 1, eliminar por icono separado
- Modal como overlay a la derecha

## Migration Plan

1. Crear migración para agregar campo estado
2. Actualizar modelo Producto
3. Actualizar componentes Angular

## Risks / Trade-offs

- [Riesgo] Migraciones anteriores no tienen estado → Crear nueva migración