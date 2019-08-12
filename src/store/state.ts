import { Store } from "redux";
import { Actions as AppActions } from "./app";
import { Actions as AudioActions } from "./audio";
import { Actions as PlayerActions } from "./player";
import { Actions as StationActions } from "./station";
import { Actions as StationsActions } from "./stations";

export interface BembaState {
  readonly audio: Audio;
  readonly player: Player;
  readonly station: Partial<Station>;
  readonly stations: Stations;
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

export type Stations = Record<string, Station>;
export type BembaActions =
  | AppActions
  | AudioActions
  | PlayerActions
  | StationActions
  | StationsActions;

export type BembaStore = Store<BembaState, BembaActions>;
