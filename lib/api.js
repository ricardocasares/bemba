import unfetch from "isomorphic-unfetch";

const { API_ENDPOINT } = process.env;

async function request(url) {
  return unfetch([API_ENDPOINT, url].join("")).then(res => res.json());
}

function paginate(page = 1, limit = 10) {
  const a = ["_page=", page].join("");
  const b = ["_limit=", limit].join("");

  return [a, b].join("&");
}

export async function search({ query, page, limit }) {
  return request([`?q=${query}`, paginate(page, limit)].join("&"));
}

export async function stations({ filter, name, page, limit }) {
  return request([`?${filter}_like=${name}`, paginate(page, limit)].join("&"));
}
