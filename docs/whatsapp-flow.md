# WhatsApp Booking Flow

This document describes the current functionality of the WhatsApp booking inquiry system and outlines a potential upgrade path for automation.

## Current Implementation: Smart Message

The booking form on the website is designed to create a "smart message" that streamlines the inquiry process for both the guest and the guest house owner.

### Flow
1.  A user completes the 4-step booking form.
2.  Upon submission, a JavaScript function gathers all form data.
3.  It constructs a formatted, multi-line string with clear labels for each piece of information.
4.  This string is URL-encoded and used to create a `https://wa.me/` link.
5.  The browser is instructed to open this link, which launches WhatsApp (desktop or mobile) with the message pre-filled and ready to send to the Belladonna Guest House business number.

### Message Structure
The generated message is structured for clarity and immediate actionability:

```text
*Booking Inquiry:*
Name: John Doe
Dates: 2025-12-15 to 2025-12-17
Room: Honeymoon Suite
Guests: 2 adults, 0 children
Extras: Breakfast
Email: john@example.com
Phone: +27 82 123 4567
Notes: Is early check-in possible?
```

This format ensures the owner has all critical information at a glance, minimizing the need for initial back-and-forth questions.

## Future Upgrade Path: Automation with WhatsApp Business API

While the current system is highly effective for a low-volume business, the process can be automated as the business scales using the official WhatsApp Business API.

### Potential Enhancements

1.  **Automated Welcome Reply**: As soon as an inquiry is received, an automated message can be sent back to the user, acknowledging receipt and setting expectations (e.g., "Thanks for your inquiry! We are checking availability and will get back to you within 30 minutes.").

2.  **Availability Checking Bot**: The inquiry could be parsed by a bot (e.g., built with a low-code platform like **Flowise** or **Twilio Studio**). The bot could potentially check a calendar or booking system API for availability for the requested dates and room type.

3.  **Automated Responses**:
    -   **If Available**: The bot could respond with "Great news! The [Room Name] is available. To confirm, please EFT a R200 deposit to [Bank Details]. Please send proof of payment here."
    -   **If Unavailable**: The bot could respond with "Unfortunately, the [Room Name] is booked for those dates. Would you like to try the [Alternative Room Name] or check other dates?"

4.  **Payment Confirmation**: After the user sends a proof of payment, the conversation can be handed over to a human agent to verify and finalize the booking.

This upgrade path allows the business to scale its operations efficiently while still maintaining the personal touch of WhatsApp communication.
