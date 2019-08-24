import fetch from 'isomorphic-unfetch';
import { indexBy } from 'remeda';
import { Station } from '@/models/state';

const BEMBA_API_ENDPOINT = process.env.BEMBA_API_ENDPOINT as string;
const index = <T>(key: keyof T) => (data: T[]) => indexBy<T>(data, x => x[key]);

export type Response<T> = { data: T };
async function request<R, T>(
  query: string,
  select: (data: R) => T,
  headers: Record<string, any> = {}
): Promise<T> {
  return fetch(BEMBA_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(select);
}

export async function fetchStation(id: string) {
  return request<Response<{ station: Station }>, Station>(
    `{ station(id: ${id}) { id, url, name, country, state, tags }}`,
    ({ data: { station } }) => station
  );
}

export async function searchStations(
  filter: string,
  name: string,
  limit: number = 5
) {
  return request<Response<{ stations: Station[] }>, Record<string, Station>>(
    `{
        stations(query: { ${filter}: "${name}" }, params: { limit: ${limit} }) {
          id
          url
          name
          tags
          state
          country
        }
      }`,
    ({ data: { stations } }) => index<Station>('id')(stations)
  );
}

export async function fetchSuggestions(categories: string[], ip?: string) {
  return request<Response<any>, any>(
    `{
      suggestions {
        ${categories.map(
          category => `${category} {
          name
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
    ({ data: { suggestions } }) => {
      return Object.entries(suggestions)
        .filter(([_, { stations }]: any) => stations.length)
        .map(([key, { name, stations }]: any) => ({
          [key]: { name, stations: index<Station>('id')(stations) },
        }))
        .reduce((acc, suggestion) => ({ ...acc, ...suggestion }), {});
    },
    ip ? { 'x-ssr-client': ip } : {}
  );
}
