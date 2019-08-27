import {
  ActionType,
  PlayerPlay,
  PlayerPause,
  PlayerReady,
  PlayerLoad,
} from './model';
import { Station } from '@/models/state';

export const load = (payload: Station): PlayerLoad => ({
  type: ActionType.LOAD,
  payload,
});

export const play = (): PlayerPlay => ({
  type: ActionType.PLAY,
});

export const pause = (): PlayerPause => ({
  type: ActionType.PAUSE,
});

export const ready = (): PlayerReady => ({
  type: ActionType.READY,
});
