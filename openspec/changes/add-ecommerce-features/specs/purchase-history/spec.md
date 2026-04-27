## ADDED Requirements

### Requirement: Página Mis Compras
El sistema SHALL display purchase history in "Mis Compras" page with purchased products.

#### Scenario: Mostrar historial de compras
- **WHEN** user navigates to "Mis Compras"
- **THEN** system displays list of all purchased products with image, name, description, and date

### Requirement: Formato de fecha de compra
El sistema SHALL display purchase date in format "Comprado el {dd/MM/yyyy}".

#### Scenario: Fecha formateada
- **WHEN** purchase is displayed
- **THEN** shows "Comprado el DD/MM/YYYY"

### Requirement: Botón Volver a comprar
El sistema SHALL show "Volver a comprar" button that redirects to product page.

#### Scenario: Volver a comprar
- **WHEN** user clicks "Volver a comprar" on a purchase
- **THEN** system redirects to product detail page

### Requirement: Ordenar por fecha descendente
El sistema SHALL display purchases from newest to oldest.

#### Scenario: Orden correcto
- **WHEN** purchase list is loaded
- **THEN** most recent purchase appears first, oldest last