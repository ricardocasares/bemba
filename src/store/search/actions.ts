import { Stations, SearchFilterParam } from "@/models/state";
import {
  ActionType,
  SearchInput,
  SearchHistorySave,
  SearchFetchRequest,
  SearchFetchReceive,
  SearchFetchErrored,
  SearchHistoryAdd
} from "./model";

export const search = (
  query: string,
  filter: SearchFilterParam
): SearchInput => ({
  type: ActionType.INPUT,
  payload: { query, filter }
});

export const historyAdd = (
  query: string,
  filter: SearchFilterParam,
  stations: Stations
): SearchHistoryAdd => ({
  type: ActionType.HISTORY_ADD,
  payload: { query, filter, stations }
});

export const historySave = (
  query: string,
  filter: SearchFilterParam,
  stations: Stations
): SearchHistorySave => ({
  type: ActionType.HISTORY_SAVE,
  payload: { query, filter, stations }
});

export const request = (
  query: string,
  filter: SearchFilterParam
): SearchFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: { filter, query }
});

export const receive = (payload: Stations): SearchFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload
});

export const errored = (payload: Error): SearchFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload
});
