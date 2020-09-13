import React from "react";
import { formatDuration } from "helpers/time";
import "./style.css";

interface CutterProps {
  youtubeID: string;
  setStart: () => unknown;
  setEnd: () => unknown;
  clipStart: number | undefined;
  clipEnd: number | undefined;
  skipTo: (video: string, t: number) => unknown;
  done: () => unknown;
}

export default function Cutter(props: CutterProps) {
  const {
    youtubeID,
    setStart,
    setEnd,
    clipStart,
    clipEnd,
    skipTo,
    done,
  } = props;

  return (
    <div className="Cutter">
      <div className="Cutter--clippers">
        <button onClick={setStart}>Start clip here</button>

        <div className="Cutter--boundaries">
          [
          {clipStart ? (
            <span onClick={() => skipTo(youtubeID, clipStart)}>
              {formatDuration(clipStart)}
            </span>
          ) : (
            "?"
          )}
          , {clipEnd ? formatDuration(clipEnd) : "?"}]
        </div>

        <button onClick={setEnd}>End clip here</button>
      </div>

      <div className="Cutter--add">
        <button
          onClick={done}
          disabled={
            !youtubeID || !clipStart || !clipEnd || clipStart >= clipEnd
          }
        >
          Add to playlist
        </button>
      </div>
    </div>
  );
}
