import { encode } from "querystring";
import fetch from "isomorphic-unfetch";
import { toObjectByKey } from "./utils";

const { BEMBA_API_ENDPOINT } = process.env;

const request = async function request(query, select) {
  return fetch(`${BEMBA_API_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(select)
    .then(toObjectByKey("id"));
};

export async function get(id) {
  return request(
    `{ station(id: ${id}) { id, url, name, country, state, tags }}`,
    ({ data }) => data.station
  );
}

export async function search({ filter, name }) {
  return request(
    `{
      stations(query: { ${filter}: "${name}" }) {
        id
        url
        name
        country
        state
      }
    }`,
    ({ data }) => data.stations
  );
}
