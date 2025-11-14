# Development Assumptions

This document outlines the key assumptions made during the development of the Belladonna Guest House static demo website. These decisions were made to meet the project's goals of speed, simplicity, and creating a production-quality demo without a backend.

### 1. Room Pricing and Availability
- The prices listed for each room (e.g., R650/night for Standard) are fixed placeholder values for the purpose of this demo. In a real-world scenario, these would be managed via a CMS or booking API.
- The "80% booked" notice on the rooms page is a static text element designed to create a sense of urgency and encourage users to book. It is not connected to a live availability system. The actual availability is handled manually by the guest house staff upon receiving a WhatsApp inquiry.

### 2. WhatsApp as the Booking Engine
- The primary goal of the booking form is to generate a qualified lead, not to process a live, confirmed booking.
- WhatsApp was chosen as the submission target because it is a ubiquitous, no-cost, and instant communication channel for both the guest and the guest house owner. It allows for a direct, personal conversation to confirm availability, answer questions, and arrange payment.
- The system generates a pre-filled, well-structured message to ensure the owner receives all necessary information without back-and-forth communication.

### 3. No PayFast Integration (For Now)
- The project requirement was to exclude immediate online payment processing.
- The booking flow explicitly states that a "R200 deposit may be required" and that payment details will be shared later via EFT or other methods discussed on WhatsApp. This separates the inquiry from the payment, simplifying the initial user interaction.
- The "sandbox comment" mentioned in the brief is implemented by this deferred payment model.

### 4. Image Placeholders (LQIP)
- The original requirement for "LQIP via inline base64" was interpreted in the context of modern web standards and the `loading="lazy"` attribute.
- To ensure optimal performance and user experience without a build step (which is necessary for generating true, image-specific base64 placeholders), we have relied on the browser's native `loading="lazy"` attribute.
- This provides an excellent balance of performance and simplicity, which is ideal for a static, no-build-step project. The images are high-quality WebP files from Unsplash, optimized for the web.

### 5. Single JavaScript File
- All custom JavaScript logic is consolidated into `assets/js/main.js`. This simplifies asset management and maintains the "no build step" philosophy.
- The code is organized within an `alpine:init` event listener to ensure Alpine.js is fully loaded before any components are initialized, preventing race conditions.
