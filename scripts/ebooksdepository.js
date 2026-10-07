#!/usr/bin/env node

import { EbooksDepositoryClient, EbooksDepositoryError } from "../src/index.js";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h") || args.length === 0) {
  process.stdout.write(`EbooksDepository CLI

Usage:
  ebooksdepository search <query> [--lang es] [--limit 10] [--json]

The API is anonymous, read-only, and free. Book prices are not published.
Docs: https://ebooksdepository.com/developers
`);
  process.exit(args.length === 0 ? 1 : 0);
}

const command = args.shift();

if (command !== "search") {
  process.stderr.write(`Unknown command: ${command}\nRun ebooksdepository --help.\n`);
  process.exit(1);
}

const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};

const lang = option("--lang");
const limitValue = option("--limit");
const json = args.includes("--json");
const query = args.filter((value, index) => {
  const previous = args[index - 1];
  return value !== "--json" && value !== "--lang" && value !== "--limit" && previous !== "--lang" && previous !== "--limit";
}).join(" ");

try {
  const result = await new EbooksDepositoryClient().search(query, {
    lang,
    limit: limitValue === undefined ? undefined : Number(limitValue)
  });

  if (json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    process.exit(0);
  }

  if (result.results.length === 0) {
    process.stdout.write("No books found.\n");
    process.exit(0);
  }

  for (const book of result.results) {
    const authors = book.authors_detail?.map((author) => author.name).join(", ") || "Unknown author";
    process.stdout.write(`${book.title} — ${authors}\n`);
    process.stdout.write(`  https://ebooksdepository.com/es/publications/${book.slug}\n`);
    process.stdout.write(`  ${book.stores?.length ?? 0} bookshop(s)\n`);
  }
} catch (error) {
  const message = error instanceof EbooksDepositoryError || error instanceof Error ? error.message : String(error);
  process.stderr.write(`Error: ${message}\n`);
  process.exit(1);
}
