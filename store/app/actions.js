import * as TYPES from "./types";

let create = type => payload => ({ type, payload });

export let showInfoNotification = create(TYPES.SHOW_INFO);
export let showErrorNotification = create(TYPES.SHOW_ERROR);
export let hideNotification = create(TYPES.NOTIFICATION_HIDE);
