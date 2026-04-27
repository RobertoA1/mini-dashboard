## ADDED Requirements

### Requirement: Visualización de perfil de usuario
El sistema SHALL display user profile data in a separate page when user clicks "Cuenta".

#### Scenario: Ver perfil
- **WHEN** authenticated user clicks "Cuenta" in dropdown
- **THEN** system displays page with user's name, lastname, email, and address

### Requirement: Datos del usuario visible en header
El sistema SHALL display user's name and lastname in header (max 12 characters, truncated with '...' if longer).

#### Scenario: Header con sesión activa
- **WHEN** user is authenticated
- **THEN** header shows "{nombre}{espacio}{apellido}" (max 12 chars total)

### Requirement: Dropdown de usuario
El sistema SHALL show dropdown menu with "Cuenta" and "Salir" options when clicking username in header.

#### Scenario: Click en nombre de usuario
- **WHEN** authenticated user clicks username in header
- **THEN** dropdown shows "Cuenta" and "Salir" options