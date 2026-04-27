## ADDED Requirements

### Requirement: Product custom attributes
The system SHALL support custom key-value attributes for each product, allowing flexible specification of product characteristics.

#### Scenario: View product attributes on detail page
- **WHEN** viewing product detail page
- **THEN** display all attributes as key-value pairs ordered by orden

#### Scenario: Different attributes per product
- **WHEN** products have different characteristics
- **THEN** each product can have its own unique set of attributes

### Requirement: Dynamic attribute rendering
Product attributes SHALL be rendered dynamically on the detail page without hardcoded values.

#### Scenario: Processor attribute display
- **WHEN** product has 'Procesador' attribute
- **THEN** display as "Procesador: {value}"

#### Scenario: Memory attribute display
- **WHEN** product has 'Memoria' attribute
- **THEN** display as "Memoria: {value}"

#### Scenario: Storage attribute display
- **WHEN** product has 'Almacenamiento' attribute
- **THEN** display as "Almacenamiento: {value}"

#### Scenario: Screen attribute display
- **WHEN** product has 'Pantalla' attribute
- **THEN** display as "Pantalla: {value}"