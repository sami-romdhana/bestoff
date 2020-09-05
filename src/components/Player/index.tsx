import React, { useState, useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import { IClip, IPlaylist, ISelectedClip } from "types";
import Seekbar from "components/Seekbar";
import "./style.css";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

interface PlayerProps {
  playlist: Entries<IPlaylist>;
  clips: Array<IClip>;
}

export function Player(props: PlayerProps) {
  const { playlist, clips } = props;
  const [progress, setProgress] = useState<number>(0);
  const playerRef = useRef<ReactPlayer>(null);
  const [currentClip, setCurrentClip] = useState<ISelectedClip>({
    video: 0,
    clip: 0,
  });
  const [ready, setReady] = useState<boolean>(false);

  const onClipChange = useCallback(
    (request: ISelectedClip) => {
      setCurrentClip(request);
      setReady(false);
    },
    [setCurrentClip, setReady]
  );

  const onProgress = useCallback(
    ({ playedSeconds }: { playedSeconds: number }) => {
      setProgress(playedSeconds);

      if (!ready) {
        if (
          playedSeconds >=
            playlist[currentClip.video][1][currentClip.clip][0] &&
          playedSeconds < playlist[currentClip.video][1][currentClip.clip][1]
        ) {
          setReady(true);
        } else {
          playerRef.current?.seekTo(
            playlist[currentClip.video][1][currentClip.clip][0]
          );
        }
        return;
      }

      if (
        !ready ||
        playedSeconds < playlist[currentClip.video][1][currentClip.clip][1]
      )
        return;

      if (currentClip.clip + 1 >= playlist[currentClip.video][1].length) {
        if (currentClip.video + 1 >= playlist.length) {
          (playerRef.current?.getInternalPlayer() as any)?.pauseVideo();
          return;
        }

        setCurrentClip({ video: currentClip.video + 1, clip: 0 });
        setReady(false);
        return;
      }

      setCurrentClip({ ...currentClip, clip: currentClip.clip + 1 });
      setReady(false);
    },
    [setProgress, ready, setReady, currentClip, playlist]
  );

  return (
    <div className="Player">
      <div className="Player--embed">
        <ReactPlayer
          ref={playerRef}
          playing={true}
          url={"https://youtube.com/watch?v=" + playlist[currentClip.video][0]}
          progressInterval={16}
          onProgress={onProgress}
          light={true}
          width={"100%"}
          height={"100%"}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                start: playlist[currentClip.video][1][currentClip.clip][0],
                end: playlist[currentClip.video][1][currentClip.clip][1],
              },
            },
          }}
        />
      </div>

      <div className="Player--seekbar">
        <Seekbar
          clips={clips}
          currentClip={currentClip}
          onClipChange={onClipChange}
          progress={progress}
        />
      </div>
    </div>
  );
}
