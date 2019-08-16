import { ActionType, PlayerPlay, PlayerPause, PlayerReady } from "./model";

export const play = (): PlayerPlay => ({
  type: ActionType.PLAY
});

export const pause = (): PlayerPause => ({
  type: ActionType.PAUSE
});

export const ready = (): PlayerReady => ({
  type: ActionType.READY
});
