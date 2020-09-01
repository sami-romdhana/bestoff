export interface ICompilation {
  version: "1.0.0";
  data: {
    title: string;
    playlist: IPlaylist;
  };
}

export interface IPlaylist {
  [key: string]: Array<[number, number]>;
}

export interface StateChangeEvent {
  data: PlayerState;
}

export enum PlayerState {
  Unstarted = -1,
  Ended = 0,
  Playing = 1,
  Paused = 2,
  Buffering = 3,
  Cued = 5,
}

export interface Clip {
  video: number;
  bounds: number;
}
