# EbooksDepository for AI agents

Official public agent integrations for
[EbooksDepository](https://ebooksdepository.com): search ebooks and
audiobooks, find the independent bookshops that carry each title, inspect
fresh store offers when available, browse bookshops, and read the developer
documentation.

The surfaces are anonymous, read-only, and free. EbooksDepository does not
sell books or process payments. Store offers are freshness-stamped snapshots,
not a cheapest-store ranking; missing prices are never estimated.

## Claude plugin

This repository is also the official EbooksDepository plugin for Claude Code
and Claude Cowork. It bundles three focused skills with the published
EbooksDepository connector:

- `ebooksdepository` — route general book-discovery questions safely.
- `find-digital-books` — find ebooks and audiobooks and inspect store offers.
- `find-independent-bookshops` — browse indexed bookshops by country.

Validate and test the plugin locally:

```bash
claude plugin validate . --strict
claude --plugin-dir .
```

## Install the skill

```bash
npx skills add publicala/ebooksdepository-agent
```

The skill is also served directly at
<https://ebooksdepository.com/skills/ebooksdepository/SKILL.md>.

## MCP

Copy the server from [`mcp.json`](./mcp.json) into an MCP host, or use the
Streamable HTTP endpoint directly:

- EbooksDepository: `https://ebooksdepository.com/mcp`

Human- and agent-readable documentation is at
`https://ebooksdepository.com/guide.md`.

## JavaScript SDK and CLI

The package is ready to publish as `ebooksdepository` once npm credentials are
configured for the official account:

```bash
npm install ebooksdepository
npx ebooksdepository search "Ursula K. Le Guin" --lang en
```

```js
import { ebooksdepository } from "ebooksdepository";

const result = await ebooksdepository.search("Ursula K. Le Guin", {
  lang: "en",
  limit: 10
});
```

Discovery and contracts:

- Developer portal: <https://ebooksdepository.com/developers>
- OpenAPI 3.1 YAML: <https://ebooksdepository.com/api/openapi.yaml>
- OpenAPI 3.1 JSON: <https://ebooksdepository.com/api/openapi.json>
- Agent guide: <https://ebooksdepository.com/guide.md>
- MCP server card: <https://ebooksdepository.com/.well-known/mcp/server-card.json>
- Agentic Resource Discovery catalog: <https://ebooksdepository.com/.well-known/ai-catalog.json>

## Repository scope

This repository contains public integration metadata only. The production
application is maintained separately. Report API and agent-integration issues
through <https://ebooksdepository.com/es/pages/contact>.
