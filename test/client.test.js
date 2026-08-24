import assert from "node:assert/strict";
import test from "node:test";

import { EbooksDepositoryClient, EbooksDepositoryError } from "../src/index.js";

test("search builds the documented request and returns the payload", async () => {
  let requestedUrl;
  const payload = { results: [], total: 0 };
  const client = new EbooksDepositoryClient({
    fetch: async (url) => {
      requestedUrl = url;
      return new Response(JSON.stringify(payload), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
  });

  assert.deepEqual(await client.search("Le Guin", { lang: "EN", limit: 5 }), payload);
  assert.equal(requestedUrl.searchParams.get("q"), "Le Guin");
  assert.equal(requestedUrl.searchParams.get("lang"), "en");
  assert.equal(requestedUrl.searchParams.get("limit"), "5");
});

test("search validates inputs before making a request", async () => {
  const client = new EbooksDepositoryClient({ fetch: async () => assert.fail("fetch must not run") });

  await assert.rejects(client.search(""), /non-empty/);
  await assert.rejects(client.search("book", { lang: "english" }), /two-letter/);
  await assert.rejects(client.search("book", { limit: 51 }), /1 to 50/);
});

test("problem documents become typed SDK errors", async () => {
  const client = new EbooksDepositoryClient({
    fetch: async () => new Response(JSON.stringify({
      title: "Rate limit exceeded",
      detail: "Try later",
      code: "rate_limit_exceeded"
    }), {
      status: 429,
      headers: { "Content-Type": "application/problem+json" }
    })
  });

  await assert.rejects(client.search("book"), (error) => {
    assert.ok(error instanceof EbooksDepositoryError);
    assert.equal(error.status, 429);
    assert.equal(error.code, "rate_limit_exceeded");
    assert.equal(error.message, "Try later");
    return true;
  });
});
