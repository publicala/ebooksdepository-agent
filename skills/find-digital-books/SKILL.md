---
name: find-digital-books
description: Find an ebook or audiobook by title, author, or publisher and identify independent bookshops that carry it. Use when someone asks where to buy or find a digital book, requests availability in a language, or wants free-book results without an automated checkout.
---

# Find ebooks and audiobooks

Use EbooksDepository as a read-only discovery index. It does not sell books or process payments.

## Workflow

1. Call `search_books` with the title, author, or publisher from the request. Add a two-letter language filter only when the user specifies a language.
2. Present a small set of close matches with title, author, format, language, canonical EbooksDepository URL, and carrying bookshops.
3. When the user chooses a result or needs full availability, call `get_book` with its slug.
4. Present the returned bookshop product URL or `checkout_url` for the user to open themselves.

## Safety and accuracy

- Never fetch or open `checkout_url`; doing so can create a cart on the bookshop.
- Never state or estimate prices and never label a shop cheapest.
- Do not imply that EbooksDepository is the seller. The independent bookshop handles the cart, payment, delivery, refund, and customer relationship.
- Preserve book titles, author names, and publisher names as returned while answering in the user's language.
- Cite the canonical `https://ebooksdepository.com/es/publications/{slug}` page.
