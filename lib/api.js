import memoize from "fast-memoize";
import unfetch from "isomorphic-unfetch";

const { BEMBA_API_ENDPOINT } = process.env;

let request = memoize(async function request(url) {
  return unfetch([BEMBA_API_ENDPOINT, url].join("")).then(res => res.json());
});

function paginate(page = 1, limit = 200) {
  let a = ["_page=", page].join("");
  let b = ["_limit=", limit].join("");

  return [a, b].join("&");
}

export async function search({ query, page, limit }) {
  return request([`/stations?q=${query}`, paginate(page, limit)].join("&"));
}

export async function stations({ filter, name, page, limit }) {
  return request(
    [`/stations?${filter}_like=${name}`, paginate(page, limit)].join("&")
  );
}
