import { ActionType, PlayerPlay, PlayerPause } from "./model";

export const play = (): PlayerPlay => ({
  type: ActionType.PLAY
});

export const pause = (): PlayerPause => ({
  type: ActionType.PAUSE
});
