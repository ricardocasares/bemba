import * as TYPES from "./types";

let create = type => payload => ({ type, payload });

export let add = create(TYPES.ADD);
export let remove = create(TYPES.REMOVE);
