## ADDED Requirements

### Requirement: User can view all active coupons
The system SHALL display a list of all currently active coupons available for use.

#### Scenario: View active coupons
- **WHEN** user navigates to the coupons page
- **THEN** system displays a list of all active coupons with their details

#### Scenario: No active coupons
- **WHEN** there are no active coupons available
- **THEN** system displays a message indicating no coupons are currently available

### Requirement: Coupon details display
Each coupon in the list SHALL show relevant information including code, description, discount type and value, and validity period.

#### Scenario: View coupon details
- **WHEN** user views the coupons list
- **THEN** each coupon shows its code, description, discount information, and validity dates