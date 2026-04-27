## ADDED Requirements

### Requirement: Public product catalog
The system MUST provide a public Angular catalog that lists active products available for public viewing.

#### Scenario: Show catalog items
- **WHEN** a visitor opens the public store
- **THEN** the system displays a list of active products

#### Scenario: Hide inactive products
- **WHEN** a product is not eligible for public display
- **THEN** the system does not include it in the catalog

### Requirement: Product search and browsing
The system MUST allow visitors to search and browse products in the Angular store.

#### Scenario: Search by text
- **WHEN** a visitor enters a search term
- **THEN** the system filters the product list to matching items

#### Scenario: Browse by category
- **WHEN** a visitor selects a category
- **THEN** the system shows only products in that category

### Requirement: Product detail view
The system MUST provide a public product detail view with relevant information for the visitor.

#### Scenario: Open product detail
- **WHEN** a visitor selects a product from the catalog
- **THEN** the system shows the product detail page

#### Scenario: Show public data only
- **WHEN** the detail view renders product information
- **THEN** the system shows only public-facing fields

### Requirement: Public store isolation
The system MUST keep the Angular store separate from administrative product actions.

#### Scenario: No admin actions in store
- **WHEN** a visitor uses the public store
- **THEN** the system does not expose edit, delete, or restore actions

#### Scenario: Separate navigation
- **WHEN** a visitor navigates the Angular store
- **THEN** the system does not send the visitor to admin-only product screens by default
