export interface Author {
  name: string;
  slug?: string;
  url?: string;
}

export interface Publisher {
  name: string;
  slug?: string;
  url?: string;
}

export interface Genre {
  name: string;
  slug?: string;
  url?: string;
}

export interface Bookshop {
  name: string;
  slug?: string;
  url: string;
  is_free?: boolean;
}

export interface Publication {
  slug: string;
  title: string;
  url?: string;
  lang?: string;
  format?: string;
  isbn?: string | null;
  is_free?: boolean;
  authors_detail: Author[];
  publisher_detail?: Publisher | null;
  genres: Genre[];
  stores: Bookshop[];
}

export interface SearchResult {
  results: Publication[];
  total: number;
}

export interface SearchOptions {
  lang?: string;
  limit?: number;
  signal?: AbortSignal;
}

export interface ClientOptions {
  baseUrl?: string;
  fetch?: typeof globalThis.fetch;
}

export interface EbooksDepositoryErrorOptions {
  status?: number;
  code?: string;
  details?: unknown;
}

export class EbooksDepositoryError extends Error {
  status?: number;
  code?: string;
  details?: unknown;
  constructor(message: string, options?: EbooksDepositoryErrorOptions);
}

export class EbooksDepositoryClient {
  constructor(options?: ClientOptions);
  search(query: string, options?: SearchOptions): Promise<SearchResult>;
}

export const ebooksdepository: EbooksDepositoryClient;
