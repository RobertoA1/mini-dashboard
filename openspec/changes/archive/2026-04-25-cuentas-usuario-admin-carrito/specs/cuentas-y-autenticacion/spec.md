## ADDED Requirements

### Requirement: Public user registration
The system MUST allow visitors to register a new user account from the public store.

#### Scenario: Create user account
- **WHEN** a visitor submits valid registration data
- **THEN** the system creates a new account with the `usuario` role

#### Scenario: Reject duplicate account data
- **WHEN** a visitor submits an email or identifier that already exists
- **THEN** the system rejects the registration with a validation error

### Requirement: Secure login and logout
The system MUST allow users to log in and log out from the store and the admin panel.

#### Scenario: Successful login
- **WHEN** a user submits valid credentials
- **THEN** the system authenticates the user and returns the active session

#### Scenario: Successful logout
- **WHEN** an authenticated user logs out
- **THEN** the system invalidates the active session

### Requirement: Role-based access
The system MUST distinguish between `usuario` and `administrativo` accounts.

#### Scenario: User role access
- **WHEN** an authenticated account has the `usuario` role
- **THEN** the system allows public store actions and denies administrative product actions

#### Scenario: Admin role access
- **WHEN** an authenticated account has the `administrativo` role
- **THEN** the system allows access to product administration actions

### Requirement: Current session lookup
The system MUST provide a way for the clients to know the current authenticated account and role.

#### Scenario: Load current session
- **WHEN** the client requests the active session
- **THEN** the system returns the current account data and role

#### Scenario: No active session
- **WHEN** the client requests the active session without authentication
- **THEN** the system returns an unauthenticated response
