import { Action } from "redux";
import { Station } from "@/store/state";

export enum ActionType {
  LIKE = "@bemba/stations/like",
  REQUEST = "@bemba/stations/request",
  RECEIVE = "@bemba/stations/receive",
  ERRORED = "@bemba/stations/errored"
}

export interface Request extends Action<ActionType.REQUEST> {}
export interface Receive extends Action<ActionType.RECEIVE> {
  readonly payload: { stations: Station[] };
}
export interface Errored extends Action<ActionType.ERRORED> {
  readonly payload: { error: Error };
}
export interface Like extends Action<ActionType.LIKE> {
  readonly payload: { station: Station };
}

export type Actions = Request | Receive | Errored | Like;

export const request = (): Request => ({
  type: ActionType.REQUEST
});

export const receive = (stations: Station[]): Receive => ({
  type: ActionType.RECEIVE,
  payload: { stations }
});

export const errored = (error: Error): Errored => ({
  type: ActionType.ERRORED,
  payload: { error }
});

export const like = (station: Station): Like => ({
  type: ActionType.LIKE,
  payload: { station }
});
