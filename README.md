# Namma Ration

A smarter, faster way to get your ration — without standing in long queues.

## What is Namma Ration?

Namma Ration is a smart system that helps people get their ration items more easily by reducing long queues and unnecessary waiting at ration shops.

It allows users to:
- Check stock availability
- Pre-order ration items
- Book a time slot
- Get ration delivered to their home

The goal is simple: save time, reduce crowding, and make ration access easier for everyone.

## The Problem

Right now, many people:
- Stand in long queues for hours
- Don't know if items are available until they reach the counter
- Face difficulty if they're elderly or have mobility issues
- Waste time and travel even when items are out of stock

## Our Solution

Namma Ration brings transparency and convenience to the ration system by providing:

**Stock Visibility**  
Users can see which items are available before visiting the shop.

**Pre-Ordering**  
Users can select items in advance based on their entitlement.

**Slot Booking**  
Users choose a time slot to avoid crowding and waiting.

**Home Delivery**
Senior citizens, pregnant women and people with disabilities can opt for ration delivery.

**IVR Support**  
Users without smartphones can use a phone call to access the system.

## Key Features

- Item availability
- Slot-based ration collection
- Home delivery
- IVR support for feature phones
- Multi-language support (English & Tamil)
- Nearest ration shop locator

## Tech Stack

- **Frontend:** Flutter (Mobile App)
- **Backend:** Firebase + Cloud Functions
- **Database:** Firestore
- **IVR:** Dialogflow CX
- **Maps:** Google Maps API
- **Voice:** Google Speech-to-Text & Text-to-Speech

## Data Used

This project uses mock data only:
- Sample ration shops
- Sample users
- Sample stock values

No real government or personal data is used.

## Safety & Responsibility

- No Aadhaar or sensitive data stored
- No payments handled
- OTP-based confirmation for deliveries
- Designed as a support system, not a replacement for government services

## How It Works

1. User checks available items
2. User selects items and a time slot
3. System confirms the request
4. User either:
      - Goes to the shop at their booked time to collect items, or
      - Ration is delivered to their home
5. All actions are logged digitally

## Future Plans

- SMS-based access
- More language support
- Integration with official government systems
- Better analytics and reporting