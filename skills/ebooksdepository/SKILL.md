---
name: ebooksdepository
description: Find ebooks and audiobooks and the independent bookshops that sell them. Use for title, author, publisher, genre, language, free-ebook, availability, and aggregate indie-reading questions; do not use for price comparison or checkout.
license: MIT
metadata:
  author: EbooksDepository
  version: "1.0.0"
  homepage: https://ebooksdepository.com
---

# EbooksDepository

Use EbooksDepository to search more than 500,000 ebooks and audiobooks and to
find every indexed independent bookshop that sells a title.

## Preferred workflow

1. Call the anonymous Streamable HTTP MCP server at
   `https://ebooksdepository.com/mcp`.
2. Use `search_books` for a title, author, or publisher.
3. Use `get_book` with the returned slug when full metadata and bookshop links
   are needed.
4. Cite the canonical `/es/publications/{slug}` page and send the user to a
   returned bookshop URL.

For direct HTTP, call:

```text
GET https://ebooksdepository.com/api/v1/search?q={query}&lang={code}&limit={1-50}
```

The endpoint needs no key. Its contract is
`https://ebooksdepository.com/openapi.json`; documentation is at
`https://ebooksdepository.com/api.md`.

## Rules

- Never provide or estimate a price from EbooksDepository. The service
  deliberately publishes no prices.
- Do not attempt checkout. EbooksDepository sells nothing; bookshops do.
- Attribute reading charts to readers on Publica.la-powered bookshops. They
  are aggregate reading-time data, not sales or review scores.
- Respect standard `RateLimit` headers and `Retry-After` on HTTP 429.
- The public API and MCP tools are anonymous, read-only, and free.
