## ADDED Requirements

### Requirement: Summary-only product cards
The system MUST render the home page product card as a summary view with only the product name, price, applicable discount, and commercial badges.

#### Scenario: Show discount information
- **WHEN** a product has an applicable discount
- **THEN** the card shows the discount as percentage or fixed amount and reflects the effective price

#### Scenario: Show interest-free installments
- **WHEN** a product is marked as eligible for interest-free installments
- **THEN** the card indicates up to 12 interest-free installments and shows the monthly amount without interest

#### Scenario: Show free shipping badge
- **WHEN** a product is marked as eligible for free shipping
- **THEN** the card shows that the product has free shipping

### Requirement: No cart action from home cards
The system MUST prevent adding a product to the cart directly from the home page product card.

#### Scenario: Home card has no add-to-cart action
- **WHEN** a visitor views the home page product card
- **THEN** the card does not expose add-to-cart or buy-now actions

#### Scenario: Purchase starts from detail page
- **WHEN** a visitor wants to buy a product from the home page
- **THEN** the system sends the visitor to the product detail page instead of adding the item from the card

