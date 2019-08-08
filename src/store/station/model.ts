import { Action } from "redux";
import { Station } from "@/store/state";

export enum ActionType {
  LOAD = "@bemba/station/load"
}

export interface Load extends Action<ActionType.LOAD> {
  readonly payload: Station;
}

export type Actions = Load;
