import { Action } from "redux";
import { Station } from "@/store/state";

export enum ActionType {
  LOAD = "@bemba/player/load",
  LOADING = "@bemba/player/loading",
  READY = "@bemba/player/ready",
  PLAY = "@bemba/player/play",
  PLAYING = "@bemba/player/playing",
  PAUSE = "@bemba/player/pause",
  PAUSED = "@bemba/player/paused",
  ERRORED = "@bemba/player/errored"
}

export interface Play extends Action<ActionType.PLAY> {}
export interface Playing extends Action<ActionType.PLAYING> {}
export interface Pause extends Action<ActionType.PAUSE> {}
export interface Paused extends Action<ActionType.PAUSED> {}
export interface Load extends Action<ActionType.LOAD> {
  readonly payload: { station: Station };
}
export interface Loading extends Action<ActionType.LOADING> {}
export interface Ready extends Action<ActionType.READY> {}
export interface Errored extends Action<ActionType.ERRORED> {
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
  type: ActionType.READY
});

export const errored = (): Errored => ({
  type: ActionType.ERRORED,
  payload: { error: new Error("There was a problem") }
});

export const loading = (): Loading => ({
  type: ActionType.LOADING
});

export const load = (station: Station): Load => ({
  type: ActionType.LOAD,
  payload: { station }
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
