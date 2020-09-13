import React, { useState } from "react";
import { IPlaylist, Entries, IClipBounds } from "types";
import { formatDuration } from "helpers/time";
import "./style.css";

interface BasisProps {
  setVideo: (id: string) => unknown;
  skipTo: (video: string, t: number) => unknown;
  editClip: (video: string, clip: IClipBounds) => unknown;
  deleteClip: (video: string, clip: IClipBounds) => unknown;
}

interface PlaylistProps extends BasisProps {
  entries: Entries<IPlaylist>;
}

interface PlaylistVideoClipsProps extends BasisProps {
  video: string;
  clips: IClipBounds[];
}

export default function Playlist(props: PlaylistProps) {
  const { entries, ...otherProps } = props;

  return (
    <>
      {entries.map(([video, clips]) => (
        <PlaylistVideoClips video={video} clips={clips} {...otherProps} />
      ))}
    </>
  );
}

function PlaylistVideoClips(props: PlaylistVideoClipsProps) {
  const { video, clips, setVideo, skipTo, editClip, deleteClip } = props;
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
                <MomentLink video={video} moment={clip[0]} skipTo={skipTo} />{" "}
                &ndash;{" "}
                <MomentLink video={video} moment={clip[1]} skipTo={skipTo} />
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
  skipTo: (video: string, t: number) => unknown;
}

function MomentLink(props: MomentLinkProps) {
  const { video, moment, skipTo } = props;

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
