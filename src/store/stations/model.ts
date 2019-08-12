import { Action } from "redux";
import { Stations } from "@/store/state";

export enum ActionType {
  FETCH_REQUEST = "@bemba/stations/fetch/request",
  FETCH_RECEIVE = "@bemba/stations/fetch/receive",
  FETCH_ERRORED = "@bemba/stations/fetch/errored"
}

export interface StationsFetchRequest extends Action<ActionType.FETCH_REQUEST> {
  payload: { filter: string; value: string };
}

export interface StationsFetchReceive extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: Stations;
}

export interface StationsFetchErrored extends Action<ActionType.FETCH_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | StationsFetchRequest
  | StationsFetchReceive
  | StationsFetchErrored;
