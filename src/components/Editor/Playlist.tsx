import React, { useState } from "react";
import { IPlaylist, Entries } from "types";
import { formatDuration } from "helpers/time";

interface BasisProps {
  setVideo: (id: string) => unknown;
  skipTo: (to: number) => unknown;
}

interface PlaylistProps extends BasisProps {
  entries: Entries<IPlaylist>;
}

interface PlaylistVideoClipsProps extends BasisProps {
  video: string;
  clips: [number, number][];
}

export default function Playlist(props: PlaylistProps) {
  const { entries, setVideo, skipTo } = props;

  return (
    <>
      {entries.map(([video, clips]) => (
        <PlaylistVideoClips
          video={video}
          clips={clips}
          setVideo={setVideo}
          skipTo={skipTo}
        />
      ))}
    </>
  );
}

function PlaylistVideoClips(props: PlaylistVideoClipsProps) {
  const { video, clips, setVideo, skipTo } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="Playlist--video" key={video}>
      <div>
        <div>
          <pre onClick={() => setVideo(video)}>{video}</pre> ({clips.length}{" "}
          clips)
        </div>
        {clips.length !== 0 && (
          <span
            className="Playlist--video-expand"
            title={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "▼" : "▶"}
          </span>
        )}
      </div>

      {expanded && (
        <ul>
          {clips.map((clip) => (
            <li className="Playlist--clip" key={clip[0] + "_" + clip[1]}>
              <pre onClick={() => skipTo(clip[0])}>
                {formatDuration(clip[0])}
              </pre>{" "}
              -{" "}
              <pre onClick={() => skipTo(clip[1])}>
                {formatDuration(clip[1])}
              </pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
