import { Action } from "redux";
import { Station } from "@/models/state";

export enum ActionType {
  LOAD = "@bemba/station/load"
}

export interface StationLoad extends Action<ActionType.LOAD> {
  readonly payload: Station;
}

export type Actions = StationLoad;
