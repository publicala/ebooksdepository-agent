const DEFAULT_BASE_URL = "https://ebooksdepository.com";

export class EbooksDepositoryError extends Error {
  constructor(message, { status, code, details } = {}) {
    super(message);
    this.name = "EbooksDepositoryError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export class EbooksDepositoryClient {
  constructor({ baseUrl = DEFAULT_BASE_URL, fetch: fetchImplementation = globalThis.fetch } = {}) {
    if (typeof fetchImplementation !== "function") {
      throw new TypeError("A Fetch API-compatible implementation is required");
    }

    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.fetch = fetchImplementation;
  }

  async search(query, { lang, limit, signal } = {}) {
    if (typeof query !== "string" || query.trim() === "") {
      throw new TypeError("query must be a non-empty string");
    }

    const url = new URL("/api/v1/search", this.baseUrl);
    url.searchParams.set("q", query.trim());

    if (lang !== undefined) {
      if (!/^[a-z]{2}$/i.test(lang)) {
        throw new TypeError("lang must be a two-letter language code");
      }

      url.searchParams.set("lang", lang.toLowerCase());
    }

    if (limit !== undefined) {
      if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
        throw new TypeError("limit must be an integer from 1 to 50");
      }

      url.searchParams.set("limit", String(limit));
    }

    const response = await this.fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "ebooksdepository-js/0.1.0"
      },
      signal
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      throw new EbooksDepositoryError(
        payload?.detail ?? payload?.title ?? `EbooksDepository returned HTTP ${response.status}`,
        {
          status: response.status,
          code: payload?.code,
          details: payload
        }
      );
    }

    return payload;
  }
}

export const ebooksdepository = new EbooksDepositoryClient();
