# Payment Integration Strategy

This document details the current payment model for the Belladonna Guest House demo and outlines a clear path for future integration of an online payment gateway like PayFast.

## Current Model: Deferred Payment

For this static demo, we have intentionally deferred the payment process to occur *after* the booking inquiry is made.

1.  **User Action**: The user fills out the booking form and submits their inquiry.
2.  **System Action**: The system opens WhatsApp with a pre-filled message containing all booking details. A PDF quote is also generated for the user's records.
3.  **Manual Confirmation**: The guest house owner receives the WhatsApp message, manually checks availability, and confirms with the guest directly.
4.  **Payment Arrangement**: If the booking is confirmed, the owner provides banking details (for EFT) or another payment link (e.g., Yoco, PayFast link) via the WhatsApp conversation to collect the R200 deposit.

This model is simple, requires no backend, and is highly effective for a small business that prefers a direct line of communication with its guests before confirming a booking.

## Future Upgrade Path: PayFast Integration

Integrating a payment gateway like PayFast is the logical next step to automate the booking and deposit process.

### Phase 1: Sandbox to Live

1.  **PayFast Account**: The business owner would create a PayFast account and obtain sandbox and live API keys.
2.  **Client-Side Integration (Initial)**:
    -   On the final step of the booking form, instead of just "Submit Inquiry," a button for "Pay R200 Deposit Now" would be shown.
    -   This button would trigger a JavaScript function that collects the booking details and makes a client-side call to a serverless function.
3.  **Serverless Function (Netlify/Vercel/Render)**:
    -   A secure serverless function would be created to handle the communication with the PayFast API. **API keys must never be exposed on the client side.**
    -   The function would receive the booking details, calculate the deposit amount, and generate a payment request to the PayFast API.
    -   PayFast would return a redirect URL.
    -   The serverless function would return this URL to the client.
4.  **Redirect**: The client-side JavaScript would redirect the user to the secure PayFast payment page.
5.  **Webhook for Confirmation**:
    -   A second serverless function would be created to act as a webhook endpoint.
    -   In the PayFast dashboard, this webhook URL would be configured to receive payment notifications (ITN - Instant Transaction Notification).
    -   When a payment is successful, PayFast sends a notification to the webhook. The webhook function then verifies the payment and can trigger a confirmation email (via SendGrid, etc.) to both the guest and the owner, officially securing the booking.

This phased approach allows for robust, secure payment processing while keeping the frontend simple and decoupled from the backend logic.
