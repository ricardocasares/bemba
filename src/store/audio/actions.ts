import {
  Init,
  Load,
  Ready,
  Errored,
  Loading,
  Play,
  Pause,
  Playing,
  Paused,
  ActionType
} from "./model";

export const init = (): Init => ({
  type: ActionType.INIT
});

export const load = (payload: string): Load => ({
  type: ActionType.LOAD,
  payload
});

export const ready = (): Ready => ({
  type: ActionType.READY
});

export const errored = (): Errored => ({
  type: ActionType.ERRORED,
  payload: Error("There was a problem")
});

export const loading = (): Loading => ({
  type: ActionType.LOADING
});

export const play = (): Play => ({
  type: ActionType.PLAY
});

export const playing = (): Playing => ({
  type: ActionType.PLAYING
});

export const pause = (): Pause => ({
  type: ActionType.PAUSE
});

export const paused = (): Paused => ({
  type: ActionType.PAUSED
});
