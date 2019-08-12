import { Stations } from "@/store/state";
import {
  ActionType,
  StationsFetchRequest,
  StationsFetchReceive,
  StationsFetchErrored
} from "./model";

export const request = (
  filter: string,
  value: string
): StationsFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: { filter, value }
});

export const receive = (payload: Stations): StationsFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload
});

export const errored = (payload: Error): StationsFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload
});
