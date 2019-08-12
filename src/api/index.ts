import fetch from "isomorphic-unfetch";
import { indexBy } from "remeda";
import { Station } from "@/store/state";

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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
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

export async function search(filter: string, name: string) {
  return request<Response<{ stations: Station[] }>, Record<string, Station>>(
    `{
        stations(query: { ${filter}: "${name}" }) {
          id
          url
          name
          country
          state
        }
      }`,
    ({ data: { stations } }) => index<Station>("id")(stations)
  );
}
