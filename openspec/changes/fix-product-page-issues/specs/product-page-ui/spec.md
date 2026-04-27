## ADDED Requirements

### Requirement: Products relacionados se muestran como cards completas
Los productos relacionados en la página de producto DEBEN mostrarse como cards de producto completas, iguales a las cards de la página principal.

#### Scenario: Productos relacionados renderizados como cards
- **WHEN** se carga la página de detalle de producto
- **THEN** los productos relacionados DEBEN mostrarse como cards con imagen, nombre, precio y botón agregar

### Requirement: Breadcrumb clickeable con cursor pointer
El breadcrumb (Inicio > {categoria} > {producto}) DEBE ser clickeable y mostrar cursor pointer en hover.

#### Scenario: Breadcrumb muestra cursor pointer en hover
- **WHEN** el usuario hace hover sobre un elemento del breadcrumb
- **THEN** el cursor DEBE cambiar a pointer y el elemento debe ser clickeable

### Requirement: Label correcto para cantidad mayor a 5
Cuando hay más de 5 productos disponibles, el label DEBE mostrar "Más de 5 productos" manteniendo la funcionalidad de agregar 5 al carrito.

#### Scenario: Más de 5 productos muestra label correcto
- **WHEN** la cantidad de productos es mayor a 5
- **THEN** el label DEBE mostrar "Más de 5 productos" con funcionalidad de agregar 5

### Requirement: Typo corregido en estado de producto
El texto de estado "Vendido yendido..." DEBE corregirse a "Vendido".

#### Scenario: Producto vendido muestra texto correcto
- **WHEN** un producto tiene estado vendido
- **THEN** el texto MOSTRADO DEBE ser "Vendido" sin duplicación