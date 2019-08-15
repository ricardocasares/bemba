import { Store } from "redux";
import { Actions as AppActions } from "@/store/app";
import { Actions as AudioActions } from "@/store/audio";
import { Actions as PlayerActions } from "@/store/player";
import { Actions as SearchActions } from "@/store/search";
import { Actions as StationActions } from "@/store/station";

export interface BembaState {
  readonly audio: Audio;
  readonly player: Player;
  readonly search: Search;
  readonly station: Partial<Station>;
}

export type Audio = {
  readonly src?: string;
  readonly ready: boolean;
  readonly loading: boolean;
  readonly playing: boolean;
  readonly error?: Error;
};

export type Player = {
  playing: boolean;
};

export type Station = {
  readonly id: string;
  readonly url: string;
  readonly name: string;
  readonly tags: string[];
  readonly state: string;
  readonly country: string;
};

export enum SearchFilterParam {
  TAG = "tag",
  NAME = "name",
  STATE = "state",
  COUNTRY = "country",
  LANGUAGE = "language"
}

export type Search = {
  query: string;
  filter: SearchFilterParam;
  dirty: boolean;
  empty: boolean;
  loading: boolean;
  results: Stations;
  history: Record<string, Stations>;
};

export type Stations = Record<string, Station>;
export type BembaActions =
  | AppActions
  | AudioActions
  | PlayerActions
  | StationActions
  | SearchActions;

export type BembaStore = Store<BembaState, BembaActions>;
