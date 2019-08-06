import { Action } from "redux";
import { Station } from "@/store/state";

export enum Types {
  READY = "@bemba/player/ready",
  LOAD = "@bemba/player/load",
  LOADING = "@bemba/player/loading",
  PLAY = "@bemba/player/play",
  PLAYING = "@bemba/player/playing",
  PAUSE = "@bemba/player/pause",
  PAUSED = "@bemba/player/paused",
  ERRORED = "@bemba/player/errored"
}

export interface Play extends Action<Types.PLAY> {}
export interface Playing extends Action<Types.PLAYING> {}
export interface Pause extends Action<Types.PAUSE> {}
export interface Paused extends Action<Types.PAUSED> {}
export interface Load extends Action<Types.LOAD> {
  readonly payload: { station: Station };
}
export interface Loading extends Action<Types.LOADING> {}
export interface Ready extends Action<Types.READY> {}
export interface Errored extends Action<Types.ERRORED> {
  readonly payload: { error: Error };
}

export type Actions =
  | Play
  | Playing
  | Pause
  | Paused
  | Load
  | Loading
  | Ready
  | Errored;

export const ready = (): Ready => ({
  type: Types.READY
});

export const errored = (error: Error): Errored => ({
  type: Types.ERRORED,
  payload: { error }
});

export const loading = (): Loading => ({
  type: Types.LOADING
});

export const load = (station: Station): Load => ({
  type: Types.LOAD,
  payload: { station }
});

export const play = (): Play => ({
  type: Types.PLAY
});

export const playing = (): Playing => ({
  type: Types.PLAYING
});

export const pause = (): Pause => ({
  type: Types.PAUSE
});

export const paused = (): Paused => ({
  type: Types.PAUSED
});
