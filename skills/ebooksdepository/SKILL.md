---
name: ebooksdepository
description: Find ebooks and audiobooks and the independent bookshops that carry them. Use for title, author, publisher, language, free-book, availability, bookshop, and aggregate indie-reading questions; never open checkout links or state prices.
license: MIT
metadata:
  author: EbooksDepository
  version: "1.1.0"
  homepage: https://ebooksdepository.com
---

# EbooksDepository

Use EbooksDepository to search ebooks and audiobooks and find indexed
independent bookshops that carry a title.

## Preferred workflow

1. Call the anonymous Streamable HTTP MCP server at
   `https://ebooksdepository.com/mcp`.
2. Use `search_books` for a title, author, or publisher.
3. Use `get_book` with the returned slug when full metadata and bookshop links
   are needed.
4. Use `list_bookshops` when the request is about independent bookshops rather
   than a particular title.
5. Cite the canonical `/es/publications/{slug}` page and send the user to a
   returned bookshop URL.

For direct HTTP, call:

```text
GET https://ebooksdepository.com/api/v1/search?q={query}&lang={code}&limit={1-50}
```

The endpoint needs no key. Its contract is
`https://ebooksdepository.com/api/openapi.yaml`; documentation is at
`https://ebooksdepository.com/api.md`.

## Rules

- Never state or estimate a price, convert currencies, or call a store cheapest.
- Do not fetch or open `checkout_url`; present it for the user to open. Opening
  it can create a cart on the independent bookshop.
- EbooksDepository does not process orders or payments; bookshops do.
- Attribute reading charts to readers on Publica.la-powered bookshops. They
  are aggregate reading-time data, not sales or review scores.
- Respect standard `RateLimit` headers and `Retry-After` on HTTP 429.
- The public API and MCP tools are anonymous, read-only, and free.
