import React, { useContext } from "react";
import { formatDuration } from "helpers/time";
import { EditorContext } from "contexts/editor";
import "./style.css";

export default function Cutter() {
  const {
    youtubeID,
    setStart,
    setEnd,
    clipStart,
    clipEnd,
    skipTo,
    done,
  } = useContext(EditorContext);

  if (!youtubeID) return null;

  return (
    <div className="Cutter">
      <div className="Cutter--clippers">
        <button className="global--button" onClick={setStart}>
          Start clip here
        </button>

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

        <button className="global--button" onClick={setEnd}>
          End clip here
        </button>
      </div>

      <div className="Cutter--add">
        <button
          className="global--button"
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
