## ADDED Requirements

### Requirement: Modelo de usuario tiene campos apellido y direccion
La migración SHALL agregar columnas apellido y direccion a la tabla usuarios.

#### Scenario: Agregar columnas
- **WHEN** se ejecuta migración
- **THEN** tabla usuarios tiene columnas apellido (STRING(100)) y direccion (STRING(255))

### Requirement: Tabla de compras existe
La migración SHALL crear tabla compras con estructura correcta.

#### Scenario: Crear tabla compras
- **WHEN** se ejecuta migración
- **THEN** tabla compras se crea con columnas: id, usuario_id, producto_id, nombre_producto, imagen_producto, descripcion_producto, precio, cantidad, fecha_compra