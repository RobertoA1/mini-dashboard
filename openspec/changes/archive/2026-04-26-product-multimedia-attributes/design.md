## Context

El proyecto es una aplicación Angular con backend en Node.js/Express y base de datos PostgreSQL. El modelo de producto actual tiene limitaciones significativas:
- Solo una imagen por producto
- Características técnicas hardcodeadas en el frontend
- SKU visible para clientes
- Sin tracking de cantidad de vendidos

## Goals / Non-Goals

**Goals:**
- Soportar múltiples imágenes por producto
- Permitir atributos de producto personalizables
- Mejorar layout de página de producto (agregar padding)
- Ocultar SKU de clientes
- Mostrar cantidad de vendidos
- Mejorar mensaje de envío gratis

**Non-Goals:**
- No cambiar la página de catálogo de productos
- No agregar nuevas APIs de gestión de productos

## Decisions

### Soporte de múltiples imágenes
- **Decisión**: Agregar nueva tabla `product_images` con relación a `product_id`, incluyendo `tipo` y `orden`
- **Tipos**: 'card' (para cards) / 'detail' (para página de detalle)
- **Rationale**: Separa responsabilidades y simplifica consultas

### Atributos de producto
- **Decisión**: Crear tabla `product_attributes` con estructura key-value y orden
- **Rationale**: Flexible para soportar diferentes atributos por producto

### Esquema de Base de Datos
```sql
-- Tabla de imágenes de producto
CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  url VARCHAR(500) NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('card', 'detail')),
  orden INTEGER NOT NULL DEFAULT 0
);

-- Tabla de atributos de producto
CREATE TABLE product_attributes (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  clave VARCHAR(100) NOT NULL,
  valor VARCHAR(255) NOT NULL,
  orden INTEGER NOT NULL DEFAULT 0
);
```

### Cambios en Frontend
- Cambiar para usar product_images en lugar de imagen única
- Renderizar atributos dinámicamente desde product_attributes
- Agregar contenedor con padding
- Ocultar elemento de SKU
- Agregar display de cantidad vendidos

## Risks / Trade-offs

[Migración afecta productos existentes] → Agregar nuevas tablas sin modificar existente product table
[Almacenamiento de imágenes] → Usar URLs existentes, no cambia almacenamiento local