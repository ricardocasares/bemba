export interface State {
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
  readonly url: string;
  readonly name: string;
  readonly tags: string[];
  readonly state: string;
  readonly country: string;
};

export type Stations = Record<string, Station>;
