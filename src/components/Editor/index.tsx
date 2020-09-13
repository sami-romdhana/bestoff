import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { IClipBounds, ICompilation, IPlaylist } from "types";
import { encode, decode } from "helpers/payload";
import useTitle from "hooks/title";
import useInput from "hooks/input";
import Playlist from "components/Playlist";
import Cutter from "components/Cutter";
import "./style.css";

interface EditorParams {
  data: string;
}

export default function Editor() {
  useTitle("Editor");
  const history = useHistory();
  const { data: encodedData } = useParams<EditorParams>();
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
    newPlaylist[youtubeID] = newPlaylist[youtubeID].sort((a, b) => a[0] - b[0]);
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

  const setVideo = useCallback(
    (id: string) => {
      setYouTubeURL("https://youtube.com/watch?v=" + id);
    },
    [setYouTubeURL]
  );

  const skipTo = useCallback(
    async (video: string, to: number) => {
      setVideo(video);
      await waitFor(() => playerRef.current === null, 1000);
      playerRef.current?.seekTo(to);
      (playerRef.current?.getInternalPlayer() as any)?.playVideo();
    },
    [setVideo]
  );

  const deleteClip = useCallback(
    (video: string, clip: IClipBounds) => {
      const newPlaylist = deepClone(playlist);
      newPlaylist[video] = newPlaylist[video].filter(
        (c) => c[0] !== clip[0] && c[1] !== clip[1]
      );
      setPlaylist(newPlaylist);
    },
    [playlist, setPlaylist]
  );

  const editClip = useCallback(
    (video: string, clip: IClipBounds) => {
      deleteClip(video, clip);
      setVideo(video);
      setClipStart(clip[0]);
      setClipEnd(clip[1]);
    },
    [deleteClip, setVideo, setClipStart, setClipEnd]
  );

  return (
    <div className="Editor">
      <div className="Editor--video">
        <div>
          {youtubeID ? (
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
          ) : (
            <div className="Editor--video-placeholder">
              <div>Enter a video first</div>
            </div>
          )}

          <div className="Editor--video-input">
            <input
              type="url"
              {...youtubeInput}
              placeholder="Paste a YouTube video URL here"
            />
            {!!youtubeURL.length && youtubeID === null && <span>&times;</span>}
          </div>

          {!!youtubeID && (
            <Cutter
              youtubeID={youtubeID}
              setStart={setStart}
              setEnd={setEnd}
              clipStart={clipStart}
              clipEnd={clipEnd}
              skipTo={skipTo}
              done={done}
            />
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
          <input type="text" value={currentURL} readOnly={true} />
        </div>

        <div className="Editor--content-part">
          <h2>Playlist</h2>
          {playlistEntries.length ? (
            <Playlist
              entries={playlistEntries}
              setVideo={setVideo}
              skipTo={skipTo}
              editClip={editClip}
              deleteClip={deleteClip}
            />
          ) : (
            <div className="Editor--playlist-empty">No clips added</div>
          )}
        </div>
      </div>
    </div>
  );
}

async function waitFor(
  condition: () => Promise<boolean> | boolean,
  timeout: number
) {
  let giveup = false;

  setTimeout(() => {
    giveup = true;
  }, timeout);

  while (await condition()) {
    if (giveup) break;
  }

  return;
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
