export interface ICompilation {
  version: "1.0.0";
  data: {
    title: string;
    author: string;
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

export interface IClip {
  videoID: number;
  clipID: number;
  bounds: [number, number];
  length: number;
}

export interface ISelectedClip {
  video: number;
  clip: number;
}
