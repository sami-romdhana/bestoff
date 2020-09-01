import React, { useState, useCallback } from "react";
import YouTube from "react-youtube";
import { Clip, StateChangeEvent, PlayerState, IPlaylist } from "types";
import "./style.css";

interface PlayerProps {
  playlist: IPlaylist;
}

export function Player(props: PlayerProps) {
  const { playlist: playlistObj } = props;
  const playlist = Object.entries(playlistObj);
  const [currentClip, setCurrentClip] = useState<Clip>({ video: 0, bounds: 0 });
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

      if (currentClip.bounds + 1 >= playlist[currentClip.video][1].length) {
        if (currentClip.video + 1 >= playlist.length) {
          return;
        }

        setCurrentClip({ video: currentClip.video + 1, bounds: 0 });
        setReady(false);
        return;
      }

      setCurrentClip({ ...currentClip, bounds: currentClip.bounds + 1 });
      setReady(false);
    },
    [ready, setReady, currentClip, playlist]
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
              start: playlist[currentClip.video][1][currentClip.bounds][0],
              end: playlist[currentClip.video][1][currentClip.bounds][1],
            },
          }}
        />
      </div>
    </div>
  );
}
