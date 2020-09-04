import React, { useState } from "react";
import { IClip, ISelectedClip } from "types";
import useDimensions from "hooks/dimensions";
import "./style.css";

interface SeekbarProps {
  clips: Array<IClip>;
  currentClip: ISelectedClip;
  onClipChange: (clip: ISelectedClip) => unknown;
  progress: number;
}

export default function Seekbar(props: SeekbarProps) {
  const [lefts, setLefts] = useState<{ seekbar: number; zoomed: number }>({
    seekbar: 0,
    zoomed: 0,
  });
  const [seekbarRef, seekbarDimensions] = useDimensions();
  const [zoomedRef, zoomedDimensions] = useDimensions();

  const onHover = (x: number) => {
    if (
      !seekbarDimensions ||
      !zoomedDimensions ||
      !zoomedDimensions.scrollWidth
    ) {
      setLefts({ seekbar: 0, zoomed: 0 });
      return;
    }
    const seekbarLength =
      seekbarDimensions.width / zoomedDimensions.scrollWidth;
    const value = x / seekbarDimensions.width - seekbarLength / 2;
    const cappedValue = Math.max(0, Math.min(1 - seekbarLength, value));
    setLefts({ seekbar: cappedValue, zoomed: value });
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;

    onHover(x);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.touches[0]
      .target as HTMLDivElement).getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;

    onHover(x);
  };

  return (
    <div className="Seekbar" ref={seekbarRef}>
      <div className="Seekbar--main-wrapper">
        <div className="Seekbar--main">
          {props.clips.map((clip) => {
            const isActive =
              props.currentClip.video === clip.videoID &&
              props.currentClip.clip === clip.clipID;
            return (
              <div
                key={clip.videoID + "_" + clip.clipID}
                className={
                  "Seekbar--clip" + (isActive ? " Seekbar--clip-active" : "")
                }
                style={{ flexGrow: clip.length }}
              >
                {isActive && (
                  <div
                    style={{
                      left:
                        Math.min(
                          1,
                          Math.max(
                            0,
                            (props.progress - clip.bounds[0]) / clip.length
                          )
                        ) *
                          100 +
                        "%",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div
          className="Seekbar--hover"
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          <div
            style={{
              left: lefts.seekbar * 100 + "%",
              width:
                seekbarDimensions && zoomedDimensions?.scrollWidth
                  ? (seekbarDimensions.width / zoomedDimensions.scrollWidth) *
                      100 +
                    "%"
                  : "10%",
            }}
          />
        </div>
      </div>
      <div className="Seekbar--zoomed">
        <div>
          <div
            className="Seekbar--zoomed-inner"
            style={{
              left:
                seekbarDimensions && zoomedDimensions?.scrollWidth
                  ? -lefts.zoomed *
                      (zoomedDimensions.scrollWidth / seekbarDimensions.width) *
                      100 +
                    "%"
                  : "0%",
            }}
            ref={zoomedRef}
          >
            {props.clips.map((clip, index) => (
              <div
                key={clip.videoID + "_" + clip.clipID}
                className={
                  "Seekbar--zoomed-clip" +
                  (props.currentClip.video === clip.videoID &&
                  props.currentClip.clip === clip.clipID
                    ? " Seekbar--zoomed-clip-active"
                    : "")
                }
                style={{ width: clip.length * 3 + "px" }}
                onClick={() =>
                  props.onClipChange({ video: clip.videoID, clip: clip.clipID })
                }
              >
                <div>#{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
