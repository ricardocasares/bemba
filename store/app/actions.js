import * as TYPES from "./types";

let create = type => payload => ({ type, payload });

export let info = create(TYPES.INFO);
export let error = create(TYPES.ERROR);
export let showNotification = create(TYPES.NOTIFICATION_SHOW);
export let hideNotification = create(TYPES.NOTIFICATION_HIDE);
