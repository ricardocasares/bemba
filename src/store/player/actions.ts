import { Action } from "redux";
import { Station } from "../state";

export enum Types {
  LOAD = "@bemba/player/load",
  READY = "@bemba/player/ready",
  PLAY = "@bemba/player/play",
  PAUSE = "@bemba/player/pause"
}

export type Ready = Action<Types.READY>;
export type Play = Action<Types.PLAY>;
export type Pause = Action<Types.PAUSE>;
export type Load = Action<Types.LOAD> & {
  readonly payload: { station: Station };
};

export type Actions = Play | Pause | Load | Ready;

export const load = (station: Station): Load => ({
  type: Types.LOAD,
  payload: { station }
});

export const ready = (): Ready => ({
  type: Types.READY
});

export const play = (): Play => ({
  type: Types.PLAY
});

export const pause = (): Pause => ({
  type: Types.PAUSE
});
