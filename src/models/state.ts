import { Store } from "redux";
import { Actions as AppActions } from "@/store/app";
import { Actions as AudioActions } from "@/store/audio";
import { Actions as PlayerActions } from "@/store/player";
import { Actions as SearchActions } from "@/store/search";
import { Actions as StationActions } from "@/store/station";
import { Actions as SuggestionsActions } from "@/store/suggestions";

export interface BembaState {
  readonly app: App;
  readonly audio: Audio;
  readonly player: Player;
  readonly search: Search;
  readonly station: Partial<Station>;
  readonly suggestions: Suggestions;
}

export interface App {
  readonly user: User;
  readonly clientReady: boolean;
  readonly serverReady: boolean;
}

export interface User {
  readonly ip: string;
  readonly state: string;
  readonly country: string;
  readonly language: string;
}

export type Audio = {
  readonly src?: string;
  readonly ready: boolean;
  readonly loading: boolean;
  readonly playing: boolean;
  readonly error?: Error;
};

export type Player = {
  ready: boolean;
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
export type Suggestions = Record<string, Stations>;

export type BembaActions =
  | AppActions
  | AudioActions
  | PlayerActions
  | SearchActions
  | StationActions
  | SuggestionsActions;

export type BembaStore = Store<BembaState, BembaActions>;