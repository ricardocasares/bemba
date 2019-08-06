export interface State {
  readonly player: Player;
  readonly stations: Station[];
}

export interface Station {
  readonly url: string;
  readonly name: string;
  readonly tags: string[];
  readonly state: string;
  readonly country: string;
}

export interface Player {
  readonly ready: boolean;
  readonly loading: boolean;
  readonly playing: boolean;
  readonly error: Error | null;
  readonly station: Station | null;
}
