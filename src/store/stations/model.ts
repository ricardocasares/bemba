import { Action } from "redux";
import { Stations } from "@/store/state";

export enum ActionType {
  LIKE = "@bemba/stations/like",
  REQUEST = "@bemba/stations/request",
  RECEIVE = "@bemba/stations/receive",
  ERRORED = "@bemba/stations/errored"
}

export interface Request extends Action<ActionType.REQUEST> {}

export interface Receive extends Action<ActionType.RECEIVE> {
  readonly payload: Stations;
}

export interface Errored extends Action<ActionType.ERRORED> {
  readonly payload: Error;
}

export type Actions = Request | Receive | Errored;
