import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICompilation, IClip } from "types";
import { formatDuration } from "helpers/time";
import { Player } from "components/Player";
import "./style.css";

export default function Compilation() {
  const { data: encodedData } = useParams();

  const compilation: ICompilation = useMemo(
    () => JSON.parse(atob(encodedData.replace(/_/g, "/").replace(/-/g, "+"))),
    [encodedData]
  );

  const playlist = useMemo(() => Object.entries(compilation.data.playlist), [
    compilation,
  ]);

  const clips: Array<IClip> = useMemo(
    () =>
      playlist.flatMap(([, clips], videoID) =>
        clips.map((bounds, clipID) => ({
          videoID,
          clipID,
          bounds,
          length: bounds[1] - bounds[0],
        }))
      ),
    [playlist]
  );

  const length: number = useMemo(
    () => clips.map((clip) => clip.length).reduce((a, b) => a + b),
    [clips]
  );

  return (
    <div className="Compilation">
      <h2>{compilation.data.title}</h2>

      <p>
        <span>{formatDuration(length)}</span> long compilation with{" "}
        <span>{clips.length} clips</span> across{" "}
        <span>{playlist.length} videos</span> by{" "}
        <span>{compilation.data.author}</span>
      </p>

      <Player playlist={playlist} clips={clips} />
    </div>
  );
}
