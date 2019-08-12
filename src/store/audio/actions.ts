import {
  ActionType,
  AudioInit,
  AudioLoad,
  AudioReady,
  AudioErrored,
  AudioLoading,
  AudioPlay,
  AudioPause,
  AudioPlaying,
  AudioPaused
} from "./model";

export const init = (): AudioInit => ({
  type: ActionType.INIT
});

export const load = (payload: string): AudioLoad => ({
  type: ActionType.LOAD,
  payload
});

export const ready = (): AudioReady => ({
  type: ActionType.READY
});

export const errored = (): AudioErrored => ({
  type: ActionType.ERRORED,
  payload: Error("There was a problem")
});

export const loading = (): AudioLoading => ({
  type: ActionType.LOADING
});

export const play = (): AudioPlay => ({
  type: ActionType.PLAY
});

export const playing = (): AudioPlaying => ({
  type: ActionType.PLAYING
});

export const pause = (): AudioPause => ({
  type: ActionType.PAUSE
});

export const paused = (): AudioPaused => ({
  type: ActionType.PAUSED
});
