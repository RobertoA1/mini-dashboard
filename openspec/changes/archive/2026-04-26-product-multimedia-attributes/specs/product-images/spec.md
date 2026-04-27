## ADDED Requirements

### Requirement: Multiple product images support
The system SHALL allow multiple images to be associated with a single product, each with a specific type and order.

#### Scenario: Get product images for card display
- **WHEN** requesting images for a product card
- **THEN** return only images where tipo = 'card' ordered by orden

#### Scenario: Get product images for detail page
- **WHEN** requesting images for a product detail page
- **THEN** return all images where tipo = 'detail' ordered by orden

#### Scenario: Multiple detail images with selection
- **WHEN** product has multiple detail images
- **THEN** display first image as main, allow user to select other images

### Requirement: Image type classification
Each product image SHALL be classified by type to determine its display context.

#### Scenario: Card image selected
- **WHEN** displaying product card
- **THEN** use image with tipo = 'card'

#### Scenario: Detail images gallery
- **WHEN** viewing product detail page
- **THEN** show thumbnail strip of all tipo = 'detail' images