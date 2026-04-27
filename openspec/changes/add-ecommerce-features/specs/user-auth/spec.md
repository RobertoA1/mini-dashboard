## ADDED Requirements

### Requirement: Registro de usuario
El sistema SHALL allow new users to register with email, password, name, lastname, and address.

#### Scenario: Registro exitoso
- **WHEN** user fills registration form with valid email, password (min 8 chars), name, lastname, and address
- **THEN** system creates new user account and returns success message

#### Scenario: Email duplicado
- **WHEN** user tries to register with an email that already exists
- **THEN** system displays error message "El email ya está registrado"

#### Scenario: Datos inválidos
- **WHEN** user submits registration form with missing or invalid fields
- **THEN** system displays error messages for each invalid field

### Requirement: Inicio de sesión
El sistema SHALL allow registered users to log in with email and password.

#### Scenario: Login exitoso
- **WHEN** user enters correct email and password
- **THEN** system authenticates user and returns JWT token

#### Scenario: Credenciales incorrectas
- **WHEN** user enters wrong email or password
- **THEN** system displays error "Email o contraseña incorrectos"

### Requirement: Cierre de sesión
El sistema SHALL allow users to log out, clearing their session token.

#### Scenario: Logout exitoso
- **WHEN** user clicks "Salir" option
- **THEN** system invalidates token and redirects to home page
- **AND** cart data persists in server for next login

### Requirement: Usuario seedeado
El sistema SHALL have 5 clientes seedeados con datos predefinidos.

#### Scenario: Clientes seed
- **WHEN** system initializes
- **THEN** creates 5 user accounts with role "Cliente"

#### Scenario: Administradores seed
- **WHEN** system initializes
- **THEN** creates 2 user accounts with role "Administrador"