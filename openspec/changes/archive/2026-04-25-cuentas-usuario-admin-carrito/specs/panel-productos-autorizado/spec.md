## ADDED Requirements

### Requirement: Admin-only product mutations
The system MUST allow only administrative accounts to create, update, and delete products from the React panel.

#### Scenario: Create product as admin
- **WHEN** an administrative user submits a new product
- **THEN** the system accepts the request and saves the product

#### Scenario: Reject mutation for user role
- **WHEN** a non-administrative user tries to create, edit, or delete a product
- **THEN** the system rejects the request with an authorization error

### Requirement: Protected admin navigation
The system MUST prevent non-administrative users from accessing product management screens in the React panel.

#### Scenario: Direct route access
- **WHEN** a non-administrative user opens a product management route directly
- **THEN** the system redirects or blocks access to that screen

#### Scenario: Authorized admin navigation
- **WHEN** an administrative user opens the product management area
- **THEN** the system displays the product CRUD screens

### Requirement: Authorized product actions
The system MUST keep the existing product add, edit, and delete actions available for administrative users.

#### Scenario: Edit product as admin
- **WHEN** an administrative user edits an existing product
- **THEN** the system persists the changes

#### Scenario: Delete product as admin
- **WHEN** an administrative user deletes a product
- **THEN** the system performs the deletion action allowed by the application
