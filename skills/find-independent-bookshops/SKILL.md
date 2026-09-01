---
name: find-independent-bookshops
description: Browse independent ebook and audiobook bookshops indexed by EbooksDepository. Use when someone asks for digital bookshops, a bookshop in a particular country, shops with large catalogs, or where a selected title is available from independent retailers.
---

# Find independent bookshops

Help the user discover bookshops without ranking commercial quality or inventing availability.

## Workflow

1. Call `list_bookshops`, adding a two-letter country code only when a location is requested.
2. Return a concise list with the shop name, country, catalog size, EbooksDepository profile, and the shop's storefront URL.
3. If the request concerns a particular book, switch to `search_books` and then `get_book` so availability comes from the title record.

## Interpretation rules

- Catalog size is the number of indexed titles, not sales volume, popularity, or service quality.
- Directory order is not an endorsement or paid ranking.
- Do not claim a shop carries a title unless the title tools return that shop.
- Do not describe reading-time charts as sales, reviews, ratings, or market share.
- EbooksDepository is the index; each bookshop controls its storefront, checkout, payment, fulfillment, and customer support.
