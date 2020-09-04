import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { IPlaylist } from "types";
import { formatDuration } from "helpers/time";
import { encode } from "helpers/payload";
import useTitle from "hooks/title";
import useInput from "hooks/input";
import "./style.css";

export default function Editor() {
  useTitle("Editor");
  const history = useHistory();
  const [title, titleInput] = useInput();
  const [author, authorInput] = useInput();
  const [youtubeURL, youtubeInput] = useInput();
  const youtubeID = useMemo(() => getYoutubeIDFromURL(youtubeURL), [
    youtubeURL,
  ]);
  const playerRef = useRef<ReactPlayer>(null);
  const [clipStart, setClipStart] = useState<number | undefined>();
  const [clipEnd, setClipEnd] = useState<number | undefined>();
  const [playlist, setPlaylist] = useState<IPlaylist>({});
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

  return (
    <div className="Editor">
      <input type="text" {...titleInput} placeholder="Compilation title" />
      <input type="text" {...authorInput} placeholder="Your name" />
      <input
        type="url"
        {...youtubeInput}
        placeholder="Paste a YouTube video URL here"
      />
      {!!youtubeURL.length && youtubeID === null && <p>Invalid URL</p>}
      {youtubeID && (
        <>
          <ReactPlayer
            ref={playerRef}
            controls={true}
            url={"https://youtube.com/watch?v=" + youtubeID}
          />

          <div>
            [{clipStart ? formatDuration(clipStart) : "?"},{" "}
            {clipEnd ? formatDuration(clipEnd) : "?"}]
          </div>

          <button onClick={setStart}>Start clip here</button>
          <button onClick={setEnd}>End clip here</button>
          <button onClick={done}>Done</button>
        </>
      )}
      {!!playlistEntries.length && (
        <>
          <input type="text" value={currentURL} />{" "}
          <button onClick={copyURL}>Copy URL</button>{" "}
          <a href={currentURL} target="_blank" rel="noopener noreferrer">
            Open
          </a>
          <h2>Clips</h2>
          {playlistEntries.map(([video, clips]) => (
            <div key={video}>
              <pre>{video}</pre>

              <ul>
                {clips.map((clip) => (
                  <li key={clip[0] + "_" + clip[1]}>
                    {formatDuration(clip[0])} to {formatDuration(clip[1])}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
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
