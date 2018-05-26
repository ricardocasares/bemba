import unfetch from "isomorphic-unfetch";
import { toObjectByKey } from "./utils";

const { BEMBA_API_ENDPOINT } = process.env;

let request = async function request(url) {
  return unfetch([BEMBA_API_ENDPOINT, url].join(""))
    .then(res => res.json())
    .then(toObjectByKey("id"));
};

function paginate(page = 1, limit = 50) {
  let a = ["_page=", page].join("");
  let b = ["_limit=", limit].join("");
  let c = ["_sort=", "votes"].join("");
  let d = ["_order=", "desc"].join("");

  return [a, b, c, d].join("&");
}

export async function get(id) {
  return request(`/stations/${id}`);
}

export async function search({ query, page, limit }) {
  return request([`/stations?q=${query}`, paginate(page, limit)].join("&"));
}

export async function stations({ filter, name, page, limit }) {
  return request(
    [`/stations?${filter}_like=${name}`, paginate(page, limit)].join("&")
  );
}
