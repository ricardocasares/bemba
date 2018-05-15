import { isServer } from "./utils";

const LOCAL_STORAGE_KEY = "state";

export function get() {
  if (isServer()) return;
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  } catch (err) {
    return;
  }
}

export function save(state) {
  if (isServer()) return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    // do nothing for now
  }
}
