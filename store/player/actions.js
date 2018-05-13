import * as TYPES from "./types";

let create = type => payload => ({ type, payload });

export let load = create(TYPES.LOAD);
export let play = create(TYPES.PLAY);
export let hide = create(TYPES.HIDE);
export let show = create(TYPES.SHOW);
export let ready = create(TYPES.READY);
export let pause = create(TYPES.PAUSE);
