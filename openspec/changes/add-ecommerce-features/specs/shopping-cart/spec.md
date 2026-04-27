## ADDED Requirements

### Requirement: Carrito persistente en servidor
El sistema SHALL store cart data in server database, not in client local storage.

#### Scenario: Persistencia de carrito
- **WHEN** user adds product to cart
- **THEN** cart data is saved in server database

#### Scenario: Recuperar carrito al iniciar sesión
- **WHEN** user logs in
- **THEN** system loads previous cart from server and displays in UI

### Requirement: Vaciar carrito visual al cerrar sesión
El sistema SHALL clear cart from UI when user logs out, but preserve data in server.

#### Scenario: Logout preserva datos
- **WHEN** user clicks "Salir"
- **THEN** cart disappears from UI but data remains in server database

#### Scenario: Reconstruir carrito
- **WHEN** user logs in again after logging out
- **THEN** system restores previous cart from server

### Requirement: Ver carrito en header
El sistema SHALL display cart icon/logo in header (replacing "Carrito" text option).

#### Scenario: Icono de carrito
- **WHEN** user views any page
- **THEN** header shows cart icon/logo, not text "Carrito"