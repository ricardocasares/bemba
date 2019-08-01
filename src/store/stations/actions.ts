import { Action } from "redux";
import { Station } from "@/store/state";

export enum Type {
  LOAD = "@bemba/stations/play",
  LIKE = "@bemba/stations/like"
}

export type Like = Action<Type.LIKE>;
export type Load = Action<Type.LOAD> & {
  readonly payload: { stations: Station[] };
};

export type Actions = Load | Like;

export const load = (stations: Station[]): Load => ({
  type: Type.LOAD,
  payload: { stations }
});

export const like = (): Like => ({
  type: Type.LIKE
});
