## ADDED Requirements

### Requirement: Anonymous cart persistence
The system MUST allow anonymous visitors to store their cart in browser localStorage.

#### Scenario: Add anonymous item
- **WHEN** an anonymous visitor adds a product to the cart
- **THEN** the system stores the cart state in localStorage

#### Scenario: Restore anonymous cart
- **WHEN** the visitor returns to the store on the same browser
- **THEN** the system restores the cart from localStorage

### Requirement: Account-based cart persistence
The system MUST persist the cart for authenticated users in their account.

#### Scenario: Add authenticated item
- **WHEN** an authenticated user adds a product to the cart
- **THEN** the system saves the cart under the user account

#### Scenario: Restore account cart
- **WHEN** an authenticated user signs in again
- **THEN** the system restores the previously saved cart

### Requirement: Cart import on login
The system MUST allow an anonymous cart to be imported into the user's account after login.

#### Scenario: Import local cart
- **WHEN** a user logs in while a localStorage cart exists
- **THEN** the system offers to import that cart into the account

#### Scenario: Merge cart content
- **WHEN** the user imports the local cart
- **THEN** the system preserves the selected items in the account cart

### Requirement: Cart review and continue action
The system MUST provide a cart view with an action to continue toward the future payment flow.

#### Scenario: Show cart contents
- **WHEN** the user opens the cart view
- **THEN** the system shows the current cart items and totals

#### Scenario: Continue to checkout step
- **WHEN** the user clicks continue
- **THEN** the system navigates to the next checkout step without processing payment yet

### Requirement: Cart item management
The system MUST allow users to add and remove products from the cart.

#### Scenario: Remove item
- **WHEN** the user removes a product from the cart
- **THEN** the system updates the cart state and totals

#### Scenario: Prevent duplicate uncontrolled entries
- **WHEN** the user adds the same product again
- **THEN** the system updates the quantity for that item instead of creating an inconsistent cart
