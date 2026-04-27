## ADDED Requirements

### Requirement: Las imágenes de productos se cargan desde disco local
El sistema DEBE cargar las imágenes de productos desde URLs locales almacenadas en la tabla product_images, mostrando la imagen con image_order = 0 como imagen principal.

#### Scenario: Producto con imagen orden 0 existente
- **WHEN** se carga un producto que tiene al menos una imagen con image_order = 0
- **THEN** el sistema MUST mostrar la imagen con image_order = 0 como imagen principal del producto

#### Scenario: Producto sin imagen orden 0
- **WHEN** un producto no tiene imagen con image_order = 0 pero tiene otras imágenes
- **THEN** el sistema MUST mostrar la primera imagen disponible (menor image_order)

#### Scenario: Producto sin imágenes
- **WHEN** un producto no tiene ninguna imagen en product_images
- **THEN** el sistema MUST mostrar una imagen por defecto (placeholder)

### Requirement: Las cards de producto muestran imagen principal
Las cards de producto en la página de productos relacionados DEBEN mostrar la imagen con orden 0 del producto.

#### Scenario: Card de producto muestra imagen orden 0
- **WHEN** se renderiza una card de producto en productos relacionados
- **THEN** la card MUST mostrar la imagen del producto con image_order = 0