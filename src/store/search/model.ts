import { Action } from "redux";
import { Stations, SearchFilterParam } from "@/models/state";

export enum ActionType {
  INPUT = "@bemba/search/input",
  HISTORY_ADD = "@bemba/search/history/add",
  HISTORY_SAVE = "@bemba/search/history/save",
  FETCH_REQUEST = "@bemba/search/fetch/request",
  FETCH_RECEIVE = "@bemba/search/fetch/receive",
  FETCH_ERRORED = "@bemba/search/fetch/errored"
}

export interface SearchInput extends Action<ActionType.INPUT> {
  readonly payload: {
    readonly query: string;
    readonly filter: SearchFilterParam;
  };
}

export interface SearchHistoryAdd extends Action<ActionType.HISTORY_ADD> {
  readonly payload: {
    readonly query: string;
    readonly filter: SearchFilterParam;
    readonly stations: Stations;
  };
}

export interface SearchHistorySave extends Action<ActionType.HISTORY_SAVE> {
  readonly payload: {
    readonly query: string;
    readonly filter: SearchFilterParam;
    readonly stations: Stations;
  };
}

export interface SearchFetchRequest extends Action<ActionType.FETCH_REQUEST> {
  readonly payload: { filter: SearchFilterParam; query: string };
}

export interface SearchFetchReceive extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: Stations;
}

export interface SearchFetchErrored extends Action<ActionType.FETCH_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | SearchInput
  | SearchHistoryAdd
  | SearchHistorySave
  | SearchFetchRequest
  | SearchFetchReceive
  | SearchFetchErrored;
