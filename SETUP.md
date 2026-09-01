# EbooksDepository plugin setup

The plugin connects to the anonymous, read-only EbooksDepository MCP server:

`https://ebooksdepository.com/api/mcp`

No account, API key, or OAuth flow is required. The server provides tools to search books, inspect one title and its store availability, and list independent bookshops.

If the tools do not appear after installation:

1. Confirm the plugin is enabled.
2. Reload plugins or restart the Claude session.
3. Confirm `https://ebooksdepository.com/api/mcp` is reachable.
4. Review connector permissions and allow the read-only tools.

EbooksDepository never processes checkout or payment. Returned bookshop and checkout links are for the user to open themselves.

Documentation: `https://ebooksdepository.com/guide.md`

Support: `https://ebooksdepository.com/es/pages/contact`
