import { ActionType, Play, Pause } from "./model";

export const play = (): Play => ({
  type: ActionType.PLAY
});

export const pause = (): Pause => ({
  type: ActionType.PAUSE
});
