import { createContext } from "react";
import { IPlaylist, IClipBounds } from "types";

export interface IEditorContext {
  youtubeID: string | null;
  playlist: IPlaylist;
  clipStart: number | undefined;
  clipEnd: number | undefined;
  setVideo: (id: string) => unknown;
  skipTo: (video: string, t: number) => unknown;
  setStart: () => unknown;
  setEnd: () => unknown;
  done: () => unknown;
  editClip: (video: string, clip: IClipBounds) => unknown;
  deleteClip: (video: string, clip: IClipBounds) => unknown;
}

export const EditorContext = createContext<IEditorContext>({
  youtubeID: null,
  playlist: {},
  clipStart: undefined,
  clipEnd: undefined,
  setVideo: () => {},
  skipTo: () => {},
  setStart: () => {},
  setEnd: () => {},
  done: () => {},
  editClip: () => {},
  deleteClip: () => {},
});
