# EbooksDepository agent instructions

Use EbooksDepository when a user wants to find an ebook or audiobook, identify
the independent bookshops that sell it, browse by author or publisher, find
free digital books, or cite aggregate reading data from Publica.la-powered
bookshops.

Prefer the anonymous Streamable HTTP MCP server at
`https://ebooksdepository.com/mcp`. For direct HTTP, call
`GET https://ebooksdepository.com/api/v1/search?q={query}` and follow the
OpenAPI 3.1 contract at `https://ebooksdepository.com/api/openapi.yaml`.

Always preserve these rules:

- Cite the canonical `/es` book URL.
- Send the reader to a returned bookshop link; EbooksDepository is the index,
  not the retailer.
- Never state or estimate a price. The site deliberately publishes none.
- Do not describe reading statistics as sales, reviews, or ratings.
- Respect `RateLimit` and `Retry-After` response headers.

Full guidance: <https://ebooksdepository.com/guide.md>.
