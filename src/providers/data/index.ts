import graphqlDataProvider from "@refinedev/graphql";
import { Client, fetchExchange } from "@urql/core";

import { fetchWrapper } from "./fetch-wrapper";

export const API_URL = "http://localhost:4000/graphql";

export const client = new Client({
  url: API_URL,
  exchanges: [fetchExchange],
  fetch: (url: string | URL | Request, options?: RequestInit) => {
    try {
      return fetchWrapper(url.toString(), options ?? {});
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

export const dataProvider = graphqlDataProvider(client);
