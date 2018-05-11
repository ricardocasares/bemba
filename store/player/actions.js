import debounce from "debounce-action";

import * as TYPES from "./types";

let create = type => payload => ({ type, payload });

export let load = create(TYPES.LOAD);
export let play = create(TYPES.PLAY);
export let pause = create(TYPES.PAUSE);
export let error = create(TYPES.ERROR);
