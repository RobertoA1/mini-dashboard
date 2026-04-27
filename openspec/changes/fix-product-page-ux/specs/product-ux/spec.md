## ADDED Requirements

### Requirement: Campo estado en producto
El producto SHALL tener campo estado (Nuevo o Usado).

#### Scenario: Agregar estado
- **WHEN** se ejecuta migración
- **THEN** tabla productos tiene columna estado (ENUM: 'Nuevo', 'Usado', DEFAULT 'Nuevo')

### Requirement: Selector de cantidad
El usuario SHALL poder seleccionar cantidad de 1 a 5 o "Más de 5".

#### Scenario: Seleccionar cantidad
- **WHEN** usuario hace click en selector
- **THEN** muestra opciones: 1, 2, 3, 4, 5, Más de 5

### Requirement: Modal agregar al carrito
Al agregar producto SHALL mostrar modal a la derecha con productos de la marca.

#### Scenario: Mostrar modal
- **WHEN** usuario agrega al carrito
- **THEN** modal muestra título "Agregaste a tu carrito", nombre producto, si envio gratis mostrar "¡Tienes envío gratis!", y hasta 6 productos de la marca en grid 2x3

### Requirement: Nombre usuario truncado
En header SHALL mostrar nombre+apellido hasta 10 letras sin espacios.

#### Scenario: Truncar nombre
- **WHEN** nombre tiene más de 10 letras (sin espacios)
- **THEN** mostrar primeras 8 letras + ".."