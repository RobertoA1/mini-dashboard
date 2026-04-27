## ADDED Requirements

### Requirement: Complete product detail purchase view
The system MUST show the product detail page with the product description, purchase actions, free return message, and shipping promise when applicable.

#### Scenario: Show shipping promise
- **WHEN** a product is marked as eligible for free shipping
- **THEN** the detail page shows "Llega gratis entre el {1 día después de hoy} y {5 días después de hoy}"

#### Scenario: Show purchase actions
- **WHEN** a visitor opens the product detail page
- **THEN** the page shows a "Comprar ahora" button and an "Agregar al carrito" button with cart icon

#### Scenario: Show return promise
- **WHEN** the detail page renders product purchase information
- **THEN** the page shows "Devolución gratis. Tienes 30 días"

### Requirement: Related products section
The system MUST show other store products below the main product information on the detail page.

#### Scenario: Render related products below detail
- **WHEN** the visitor views a product detail page
- **THEN** the system displays related products below all main product information

#### Scenario: Keep related products secondary
- **WHEN** related products are shown
- **THEN** they do not replace or hide the main product description and purchase actions

