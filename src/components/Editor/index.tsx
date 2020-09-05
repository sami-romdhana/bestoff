import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ICompilation, IPlaylist } from "types";
import { formatDuration } from "helpers/time";
import { encode, decode } from "helpers/payload";
import useTitle from "hooks/title";
import useInput from "hooks/input";
import "./style.css";

export default function Editor() {
  useTitle("Editor");
  const history = useHistory();
  const { data: encodedData } = useParams();
  const payload: ICompilation = useMemo(() => decode(encodedData), [
    encodedData,
  ]);
  const [title, titleInput] = useInput(payload.data.title);
  const [author, authorInput] = useInput(payload.data.author);
  const [youtubeURL, youtubeInput, setYouTubeURL] = useInput();
  const youtubeID = useMemo(() => getYoutubeIDFromURL(youtubeURL), [
    youtubeURL,
  ]);
  const playerRef = useRef<ReactPlayer>(null);
  const [clipStart, setClipStart] = useState<number | undefined>();
  const [clipEnd, setClipEnd] = useState<number | undefined>();
  const [playlist, setPlaylist] = useState<IPlaylist>(payload.data.playlist);
  const playlistEntries = useMemo(() => Object.entries(playlist), [playlist]);

  const setStart = useCallback(() => {
    if (!playerRef.current) return;
    setClipStart(playerRef.current.getCurrentTime());
  }, [setClipStart]);

  const setEnd = useCallback(() => {
    if (!playerRef.current) return;
    setClipEnd(playerRef.current.getCurrentTime());
  }, [setClipEnd]);

  const done = useCallback(() => {
    if (!youtubeID || !clipStart || !clipEnd) {
      return;
    }
    if (clipStart >= clipEnd) {
      alert("Clip can't start after its end");
      return;
    }
    const newPlaylist = deepClone(playlist);
    if (!newPlaylist[youtubeID]) newPlaylist[youtubeID] = [];

    newPlaylist[youtubeID].push([clipStart, clipEnd]);
    setPlaylist(newPlaylist);
    setClipStart(undefined);
    setClipEnd(undefined);
  }, [youtubeID, playlist, clipStart, clipEnd]);

  const currentPayload = useMemo(
    () =>
      encode({
        version: "1.0.0",
        data: {
          title,
          author,
          playlist,
        },
      }),
    [title, author, playlist]
  );

  useEffect(() => {
    history.replace("/editor/" + currentPayload);
  }, [history, currentPayload]);

  const currentURL = useMemo(
    () =>
      window.location.protocol +
      "//" +
      window.location.host +
      "/#/compilation/" +
      currentPayload,
    [currentPayload]
  );

  const copyURL = useCallback(() => {
    navigator.clipboard.writeText(currentURL);
  }, [currentURL]);

  const setVideo = useCallback(
    (id: string) => {
      setYouTubeURL("https://youtube.com/watch?v=" + id);
    },
    [setYouTubeURL]
  );

  const skipTo = useCallback((to: number) => {
    playerRef.current?.seekTo(to);
    (playerRef.current?.getInternalPlayer() as any)?.playVideo();
  }, []);

  return (
    <div className="Editor">
      <div className="Editor--video">
        <div>
          <div className="Editor--video-input">
            <input
              type="url"
              {...youtubeInput}
              placeholder="Paste a YouTube video URL here"
            />
            {!!youtubeURL.length && youtubeID === null && <span>&times;</span>}
          </div>
          {youtubeID ? (
            <>
              <div className="Editor--player">
                <ReactPlayer
                  ref={playerRef}
                  controls={true}
                  width={"100%"}
                  height={"100%"}
                  url={"https://youtube.com/watch?v=" + youtubeID}
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 0,
                      },
                    },
                  }}
                />
              </div>

              <div className="Editor--clippers">
                <button onClick={setStart}>Start clip here</button>

                <div className="Editor--boundaries">
                  [
                  {clipStart ? (
                    <span onClick={() => skipTo(clipStart)}>
                      {formatDuration(clipStart)}
                    </span>
                  ) : (
                    "?"
                  )}
                  , {clipEnd ? formatDuration(clipEnd) : "?"}]
                </div>

                <button onClick={setEnd}>End clip here</button>
              </div>

              <div className="Editor--add">
                <button onClick={done}>Add to playlist</button>
              </div>
            </>
          ) : (
            <div className="Editor--video-placeholder">
              <div>Enter a video first</div>
            </div>
          )}
        </div>
      </div>
      <div className="Editor--content">
        <div className="Editor--content-part">
          <h2>Details</h2>
          <label>
            <span>Title</span>
            <input
              type="text"
              {...titleInput}
              placeholder="Compilation title"
            />
          </label>
          <label>
            <span>Author</span>
            <input type="text" {...authorInput} placeholder="Your name" />
          </label>
        </div>
        <div className="Editor--content-part Editor--share">
          <h2>Share</h2>
          <input type="text" value={currentURL} />{" "}
          <div>
            <button onClick={copyURL}>Copy URL</button>{" "}
            <a href={currentURL} target="_blank" rel="noopener noreferrer">
              Open
            </a>
          </div>
        </div>
        <div className="Editor--content-part">
          <h2>Playlist</h2>
          {playlistEntries.length ? (
            playlistEntries.map(([video, clips]) => (
              <PlaylistVideoClips
                video={video}
                clips={clips}
                setVideo={setVideo}
                skipTo={skipTo}
              />
            ))
          ) : (
            <div className="Editor--playlist-empty">No clips added</div>
          )}
        </div>
      </div>
    </div>
  );
}

interface PlaylistVideoClipsProps {
  video: string;
  clips: Array<[number, number]>;
  setVideo: (id: string) => unknown;
  skipTo: (to: number) => unknown;
}

function PlaylistVideoClips(props: PlaylistVideoClipsProps) {
  const { video, clips, setVideo, skipTo } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="Editor--playlist-video" key={video}>
      <div>
        <div>
          <pre onClick={() => setVideo(video)}>{video}</pre> ({clips.length}{" "}
          clips)
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          disabled={clips.length === 0}
        >
          {expanded ? "-" : "+"}
        </button>
      </div>

      {expanded && (
        <ul>
          {clips.map((clip) => (
            <li className="Editor--playlist-clip" key={clip[0] + "_" + clip[1]}>
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

const YOUTUBE_URL_REGEX = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

function getYoutubeIDFromURL(url: string) {
  const match = url.match(YOUTUBE_URL_REGEX);

  if (match && match[2].length >= 11) {
    return match[2];
  }

  return null;
}

function deepClone<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj)) as T;
}
