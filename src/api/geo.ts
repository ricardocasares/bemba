import fetch from "isomorphic-unfetch";
import { User } from "@/models/state";

const KEY = process.env.IP_STACK_API_KEY;
const API = process.env.IP_STACK_API_ENDPOINT;

export async function geo(ip: string): Promise<User> {
  return fetch(`${API}/${ip}?access_key=${KEY}`)
    .then(r => r.json())
    .then(
      ({
        ip,
        city: state,
        region_name: region,
        country_name: country,
        location: {
          languages: [{ name: language }],
        },
      }) => ({
        ip,
        state: state || region,
        country,
        language,
      })
    )
    .catch(err => {
      throw new Error(
        `There was a problem locating the user: [${err.message}]`
      );
    });
}
