import { Action } from "redux";
import { Station } from "@/store/state";

export enum Type {
  LOAD = "@bemba/player/load",
  READY = "@bemba/player/ready",
  PLAY = "@bemba/player/play",
  PAUSE = "@bemba/player/pause"
}

export type Ready = Action<Type.READY>;
export type Play = Action<Type.PLAY>;
export type Pause = Action<Type.PAUSE>;
export type Load = Action<Type.LOAD> & {
  readonly payload: { station: Station };
};

export type Actions = Play | Pause | Load | Ready;

export const load = (station: Station): Load => ({
  type: Type.LOAD,
  payload: { station }
});

export const ready = (): Ready => ({
  type: Type.READY
});

export const play = (): Play => ({
  type: Type.PLAY
});

export const pause = (): Pause => ({
  type: Type.PAUSE
});
