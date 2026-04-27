## ADDED Requirements

### Requirement: Cart totals and shipping summary
The system MUST show the sum of product costs, the sum of shipping costs, and the final total in the cart view.

#### Scenario: Show shipping as free
- **WHEN** a cart item or product has free shipping
- **THEN** the shipping line shows "GRATIS"

#### Scenario: Sum shipping costs correctly
- **WHEN** the cart contains multiple products
- **THEN** the system sums the shipping costs without double-counting the same product

#### Scenario: Show total amount
- **WHEN** the cart is rendered
- **THEN** the system shows the final total after adding products, shipping, and discounts

### Requirement: Coupon application
The system MUST allow the visitor to enter a coupon and apply either a fixed amount or percentage discount.

#### Scenario: Apply percentage coupon
- **WHEN** the visitor enters a valid percentage coupon
- **THEN** the cart recalculates the total with the percentage discount applied

#### Scenario: Apply fixed amount coupon
- **WHEN** the visitor enters a valid fixed-amount coupon
- **THEN** the cart recalculates the total with the fixed discount applied

#### Scenario: Reject invalid coupon
- **WHEN** the visitor enters an invalid or expired coupon
- **THEN** the system rejects the coupon and keeps the previous total

### Requirement: Continue purchase flow
The system MUST provide a Continue button that moves the visitor to the next payment-method step without charging the order yet.

#### Scenario: Continue from cart
- **WHEN** the visitor clicks Continue
- **THEN** the system navigates to the payment-method selection step

### Requirement: Purchase protection message
The system MUST display the purchase protection message in the cart view.

#### Scenario: Show protection message
- **WHEN** the cart view is visible
- **THEN** the system shows "Compra protegida. Recibe el producto que necesitabas o te devolvemos el dinero."

