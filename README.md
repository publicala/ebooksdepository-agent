# EbooksDepository for AI agents

Official public agent integrations for
[EbooksDepository](https://ebooksdepository.com): search 500,000+ ebooks and
audiobooks, find the independent bookshops that sell each title, and read the
developer documentation.

The surfaces are anonymous, read-only, and free. EbooksDepository does not
sell books and does not publish or compare prices.

## Install the skill

```bash
npx skills add publicala/ebooksdepository-agent
```

The skill is also served directly at
<https://ebooksdepository.com/skills/ebooksdepository/SKILL.md>.

## MCP

Copy the servers from [`mcp.json`](./mcp.json) into an MCP host, or use these
Streamable HTTP endpoints directly:

- Catalog: `https://ebooksdepository.com/mcp`
- Documentation: `https://ebooksdepository.com/mcp/docs`

Discovery and contracts:

- Developer portal: <https://ebooksdepository.com/developers>
- OpenAPI 3.1: <https://ebooksdepository.com/openapi.json>
- Agent guide: <https://ebooksdepository.com/guide.md>
- MCP server card: <https://ebooksdepository.com/.well-known/mcp/server-card.json>
- Agentic Resource Discovery catalog: <https://ebooksdepository.com/.well-known/ai-catalog.json>

## Repository scope

This repository contains public integration metadata only. The production
application is maintained separately. Report API and agent-integration issues
through <https://ebooksdepository.com/es/pages/contact>.
