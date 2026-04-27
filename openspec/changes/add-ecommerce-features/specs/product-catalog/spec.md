## ADDED Requirements

### Requirement: Carruseles de productos por categoría
El sistema SHALL display products in horizontal carousels grouped by category on home page.

#### Scenario: Carruseles por categoría
- **WHEN** user visits home page
- **THEN** system shows one carousel per product category

### Requirement: Nombre de categoría centrado
El sistema SHALL display category name centered above each carousel.

#### Scenario: Category label
- **WHEN** carousel is rendered
- **THEN** category name is displayed centered above carousel

### Requirement: Sin sidebar
El sistema SHALL NOT display sidebar on home page.

#### Scenario: Sin sidebar
- **WHEN** home page is loaded
- **THEN** no sidebar component is visible

### Requirement: Envío gratis
El sistema SHALL display "Llega gratis entre el {1 día después de hoy} y {5 días después de hoy}" for products with free shipping.

#### Scenario: Envío gratis indicado
- **WHEN** product has freeShipping flag
- **THEN** shows shipping date range message

### Requirement: Página de producto sin agregar al carrito
El sistema SHALL NOT show "Agregar al carrito" button on product page, only "Comprar ahora".

#### Scenario: Solo comprar ahora
- **WHEN** product detail page is displayed
- **THEN** only "Comprar ahora" button is visible

### Requirement: Productos relacionados sin redirección
El sistema SHALL NOT redirect when clicking "Ver producto" on related products.

#### Scenario: Related products no redirige
- **WHEN** user clicks "Ver producto" on related products section
- **THEN** no navigation occurs or button is non-functional