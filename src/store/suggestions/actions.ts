import { Stations, SearchFilterParam } from "@/models/state";
import {
  ActionType,
  SuggestionsPrepare,
  SuggestionsFetchRequest,
  SuggestionsFetchReceive,
  SuggestionsFetchErrored
} from "./model";

export const prepare = (): SuggestionsPrepare => ({
  type: ActionType.PREPARE
});

export const request = (
  query: string,
  filter: SearchFilterParam
): SuggestionsFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: { query, filter }
});

export const receive = (
  query: string,
  stations: Stations
): SuggestionsFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload: { query, stations }
});

export const errored = (payload: Error): SuggestionsFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload
});
