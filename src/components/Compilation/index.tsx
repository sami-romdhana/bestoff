import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICompilation, IClip } from "types";
import { Player } from "components/Player";
import "./style.css";
import { formatDuration } from "helpers/time";

export default function Compilation() {
  const { data: encodedData } = useParams();

  const compilation: ICompilation = useMemo(
    () => JSON.parse(atob(encodedData.replace(/_/g, "/").replace(/-/g, "+"))),
    [encodedData]
  );

  const clips: Array<IClip> = useMemo(
    () =>
      Object.entries(compilation.data.playlist).flatMap(([, clips], videoID) =>
        clips.map((bounds, clipID) => ({
          videoID,
          clipID,
          bounds,
          length: bounds[1] - bounds[0],
        }))
      ),
    [compilation]
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
        <span>{Object.keys(compilation.data.playlist).length} videos</span> by{" "}
        <span>{compilation.data.author}</span>
      </p>

      <Player playlist={compilation.data.playlist} clips={clips} />
    </div>
  );
}
