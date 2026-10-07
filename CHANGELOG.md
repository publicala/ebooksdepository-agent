# Changelog

## Claude plugin 1.2.2 - 2026-10-06

- Clarified discovery metadata for books, ebooks, audiobooks, and independent bookshops.
- Added the plugin icon and documentation, support, privacy, and terms links.
- Moved the npm CLI to `scripts/` so the plugin no longer contains the top-level `bin/` directory rejected by Claude apps and Cowork. The installed CLI command remains `ebooksdepository`.

## 1.2.0 - 2026-09-01

- Added OpenAI universal plugin packaging and ChatGPT submission metadata.
- Kept the existing MCP server and discovery skills available across ChatGPT, Codex, and Claude.

## 1.1.0 - 2026-09-01

- Added the Claude plugin manifest and product MCP configuration.
- Added focused book-search and independent-bookshop skills.
- Updated store-offer guidance to match the live read-only MCP tools.

## 1.0.0

- Initial public agent skill, MCP configuration, JavaScript SDK, and CLI.
