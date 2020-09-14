import React, { useContext, useState } from "react";
import { IClipBounds } from "types";
import { formatDuration } from "helpers/time";
import { EditorContext } from "contexts/editor";
import "./style.css";

export default function Playlist() {
  const { playlist } = useContext(EditorContext);
  const entries = Object.entries(playlist);

  return (
    <>
      {entries.map(([video, clips]) => (
        <PlaylistVideoClips video={video} clips={clips} />
      ))}
    </>
  );
}

interface PlaylistVideoClipsProps {
  video: string;
  clips: IClipBounds[];
}

function PlaylistVideoClips(props: PlaylistVideoClipsProps) {
  const { video, clips } = props;
  const { setVideo, editClip, deleteClip } = useContext(EditorContext);
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="Playlist--video" key={video}>
      <div>
        <div>
          <span
            className="Playlist--link"
            title="Load this video"
            onClick={() => setVideo(video)}
          >
            {video}
          </span>{" "}
          ({clips.length} clips)
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
              <div>
                <MomentLink video={video} moment={clip[0]} /> &ndash;{" "}
                <MomentLink video={video} moment={clip[1]} />
              </div>
              <div>
                <button className="small" onClick={() => editClip(video, clip)}>
                  Edit
                </button>
                <button
                  className="small"
                  onClick={() => deleteClip(video, clip)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface MomentLinkProps {
  video: string;
  moment: number;
}

function MomentLink(props: MomentLinkProps) {
  const { video, moment } = props;
  const { skipTo } = useContext(EditorContext);

  return (
    <span
      className="Playlist--link"
      title="Jump to this moment"
      onClick={() => skipTo(video, moment)}
    >
      {formatDuration(moment)}
    </span>
  );
}
