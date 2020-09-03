import React, { useState, useCallback } from "react";
import YouTube from "react-youtube";
import {
  IClip,
  StateChangeEvent,
  PlayerState,
  IPlaylist,
  ISelectedClip,
} from "types";
import Seekbar from "components/Seekbar";
import "./style.css";

interface PlayerProps {
  playlist: IPlaylist;
  clips: Array<IClip>;
}

export function Player(props: PlayerProps) {
  const { playlist: playlistObj, clips } = props;
  const playlist = Object.entries(playlistObj);
  const [currentClip, setCurrentClip] = useState<ISelectedClip>({
    video: 0,
    clip: 0,
  });
  const [ready, setReady] = useState<boolean>(false);

  const onReady = useCallback(() => {
    setReady(true);
  }, [setReady]);

  const onStateChange = useCallback(
    (event: StateChangeEvent) => {
      if (event.data === PlayerState.Playing && !ready) {
        setReady(true);
      }

      if (event.data !== PlayerState.Ended) {
        return;
      }

      if (!ready) {
        return;
      }

      if (currentClip.clip + 1 >= playlist[currentClip.video][1].length) {
        if (currentClip.video + 1 >= playlist.length) {
          return;
        }

        setCurrentClip({ video: currentClip.video + 1, clip: 0 });
        setReady(false);
        return;
      }

      setCurrentClip({ ...currentClip, clip: currentClip.clip + 1 });
      setReady(false);
    },
    [ready, setReady, currentClip, playlist]
  );

  const onClipChange = useCallback(
    (request: ISelectedClip) => {
      setCurrentClip(request);
      setReady(false);
    },
    [setCurrentClip, setReady]
  );

  return (
    <div className="Player">
      <div className="Player--embed">
        <YouTube
          videoId={playlist[currentClip.video][0]}
          onStateChange={onStateChange}
          onReady={onReady}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              start: playlist[currentClip.video][1][currentClip.clip][0],
              end: playlist[currentClip.video][1][currentClip.clip][1],
            },
          }}
        />
      </div>

      <div className="Player--seekbar">
        <Seekbar
          clips={clips}
          currentClip={currentClip}
          onClipChange={onClipChange}
        />
      </div>
    </div>
  );
}
