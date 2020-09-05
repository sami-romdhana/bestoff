import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICompilation, IClip } from "types";
import { formatDuration } from "helpers/time";
import { decode } from "helpers/payload";
import useTitle from "hooks/title";
import { Player } from "components/Player";
import "./style.css";

export default function Compilation() {
  const { data: encodedData } = useParams();

  const payload: ICompilation = useMemo(() => decode(encodedData), [
    encodedData,
  ]);

  useTitle(payload.data.title, { hyphen: true });

  const playlist = useMemo(() => Object.entries(payload.data.playlist), [
    payload,
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
    <div className="Compilation global--wrapper">
      <h2>{payload.data.title}</h2>

      <p>
        <span>{formatDuration(length)}</span> long compilation with{" "}
        <span>{clips.length} clips</span> across{" "}
        <span>{playlist.length} videos</span> by{" "}
        <span>{payload.data.author}</span>
      </p>

      <Player playlist={playlist} clips={clips} />
    </div>
  );
}
