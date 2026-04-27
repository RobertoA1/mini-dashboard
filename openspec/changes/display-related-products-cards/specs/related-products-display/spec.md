## ADDED Requirements

### Requirement: Mostrar productos relacionados en cards
El sistema SHALL permitir mostrar una lista de productos relacionados usando el componente `ProductCardComponent` dentro de un layout de grid.

#### Scenario: Mostrar productos cuando hay datos
- **WHEN** el componente recibe un array de productos no vacío
- **THEN** renderiza una sección con título "Productos relacionados" y muestra cada producto en una card

#### Scenario: Ocultar cuando no hay productos
- **WHEN** el array de productos está vacío
- **THEN** no renderiza la sección

### Requirement: Componente reutilizable
El componente SHALL aceptar productos como input y renderizarlos usando `ProductCardComponent`.

#### Scenario: Rendering de cada producto
- **WHEN** el componente recibe un producto en el array
- **THEN** renderiza `<app-product-card [product]="producto">`