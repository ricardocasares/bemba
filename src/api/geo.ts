import langs from "langs";
import fetch from "isomorphic-unfetch";
// import { User } from "@/models/state";

const KEY = process.env.GEOIP_API_KEY;
const API = process.env.GEOIP_API_ENDPOINT;

function getLanguage(languages: string = "en") {
  return [
    ...new Set(
      languages
        .replace(/\s/g, "")
        .split(",")
        .map(lang => lang.split("-").shift())
        .map(code => langs.where("1", code as string))
    ),
  ]
    .filter(Boolean)
    .map(({ name }) => name)
    .shift();
}

export async function geo(ip?: string): Promise<any> {
  return fetch(
    `${API}/ipgeo?apiKey=${KEY}${
      ip ? `&ip=${ip}` : ""
    }&fields=state_prov,country_name,city,currency,languages`
  )
    .then(r => r.json())
    .then(
      ({
        city,
        state_prov: state,
        country_name: country,
        languages,
        currency: { code: currency },
      }) => ({
        city: city.trim().replace(/city/gi, ""),
        state,
        country,
        currency,
        language: getLanguage(languages),
      })
    )
    .catch(err => {
      console.error(err);
      throw new Error(
        `There was a problem locating the user: [${err.message}]`
      );
    });
}
