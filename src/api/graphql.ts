import fetch from "isomorphic-unfetch";
import { indexBy } from "remeda";
import { Station } from "@/models/state";

const BEMBA_API_ENDPOINT = process.env.BEMBA_API_ENDPOINT as string;
const index = <T>(key: keyof T) => (data: T[]) => indexBy<T>(data, x => x[key]);

export type Response<T> = { data: T };
async function request<R, T>(
  query: string,
  select: (data: R) => T
): Promise<T> {
  return fetch(BEMBA_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(select);
}

export async function get(id: string) {
  return request<Response<{ station: Station }>, Station>(
    `{ station(id: ${id}) { id, url, name, country, state, tags }}`,
    ({ data: { station } }) => station
  );
}

export async function search(filter: string, name: string, limit: number = 5) {
  return request<Response<{ stations: Station[] }>, Record<string, Station>>(
    `{
        stations(query: { ${filter}: "${name}" }, pagination: { limit: ${limit} }) {
          id
          url
          name
          tags
          state
          country
        }
      }`,
    ({ data: { stations } }) => index<Station>("id")(stations)
  );
}

export async function suggestions(...categories: string[]) {
  return request<Response<any>, any>(
    `{
      suggestions {
        ${categories.map(
          category => `${category} {
          stations {
            id
            url
            name
            tags
            state
            country
          }
        }`
        )}
      }
    }`,
    ({ data: { suggestions } }) =>
      Object.entries(suggestions)
        .map(([key, { stations }]: any) => ({
          [key]: { stations: index<Station>("id")(stations) },
        }))
        .reduce((acc, suggestion) => ({ ...acc, ...suggestion }), {})
  );
}
