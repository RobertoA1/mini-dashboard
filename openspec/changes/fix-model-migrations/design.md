## Context

El proyecto tiene modelos Sequelize definidos con campos adicionals (apellido, direccion en Usuario; compras con relaciones a Usuario y Producto), pero las migraciones no reflejan estos campos. Necesitamos crear migraciones para actualizar la estructura de la base de datos.

## Goals / Non-Goals

**Goals:**
- Agregar columnas apellido y direccion a tabla usuarios
- Crear tabla compras con claves foráneas a usuarios y productos

**Non-Goals:**
- No recrear tablas existentes (solo modificar/crear las necesarias)

## Decisions

- Usar queryInterface.addColumn para agregar columnas a tabla existente
- Crear tabla compras con estructura que coincida con modelo Compra

## Migration Plan

1. Crear migración para agregar columnas a usuarios (20250101000008-add-usuario-fields.js)
2. Crear migración para tabla compras (20250101000009-create-compras.js)
3. Ejecutar migraciones

## Risks / Trade-offs

- [Riesgo] Datos existentes → Migration no modifica datos, solo estructura