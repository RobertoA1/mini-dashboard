## ADDED Requirements

### Requirement: Store storefront merchandising data
The system MUST persist the product merchandising data required by the storefront, including discount type, discount value, interest-free installment flag, and free-shipping flag.

#### Scenario: Persist discount metadata
- **WHEN** an administrator marks a product with a percentage or fixed discount
- **THEN** the database stores the discount metadata for the storefront to render

#### Scenario: Persist installment eligibility
- **WHEN** an administrator marks a product as eligible for interest-free installments
- **THEN** the database stores that eligibility for the storefront to calculate the monthly amount

#### Scenario: Persist free shipping flag
- **WHEN** an administrator marks a product as eligible for free shipping
- **THEN** the database stores that flag for the storefront to display shipping messages

### Requirement: Store coupon and shipping rules
The system MUST persist coupon definitions and shipping rules required by the cart totals.

#### Scenario: Coupon definitions exist
- **WHEN** the cart validates a coupon
- **THEN** the database contains the coupon data needed to validate percentage or fixed discounts

#### Scenario: Shipping rules exist
- **WHEN** the cart calculates shipping totals
- **THEN** the database contains the shipping rule data needed to determine whether shipping is gratis or chargeable

### Requirement: Database readiness for storefront
The system MUST ensure the database contains all required storefront tables and columns before the new pages are used.

#### Scenario: Missing table is created
- **WHEN** a required table is missing from the database
- **THEN** the migration or setup step creates it

#### Scenario: Existing tables remain intact
- **WHEN** the database is prepared for the storefront
- **THEN** the existing tables for products, users, and cart remain available

