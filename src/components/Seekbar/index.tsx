import React, { useEffect } from "react";
import { IPlaylist, Clip } from "types";
import "./style.css";

interface SeekbarProps {
  playlist: IPlaylist;
  currentClip: Clip;
  onClipChange: (clip: Clip) => unknown;
}

export default function Seekbar(props: SeekbarProps) {
  useEffect(() => {
    console.log(props.currentClip);
  }, [props.currentClip]);

  return (
    <div className="Seekbar">
      {Object.entries(props.playlist).map((clips, video) =>
        clips[1].map((clip, bounds) => (
          <div
            key={video + "_" + bounds}
            className={
              "Seekbar--clip" +
              (props.currentClip.video === video &&
              props.currentClip.bounds === bounds
                ? " Seekbar--clip-active"
                : "")
            }
            style={{ flexGrow: clip[1] - clip[0] }}
            onClick={() => props.onClipChange({ video, bounds })}
          />
        ))
      )}
    </div>
  );
}
