import React, { useState } from "react";
import { IClip, ISelectedClip } from "types";
import "./style.css";
import useDimensions from "hooks/dimensions";

interface SeekbarProps {
  clips: Array<IClip>;
  currentClip: ISelectedClip;
  onClipChange: (clip: ISelectedClip) => unknown;
}

export default function Seekbar(props: SeekbarProps) {
  const [lefts, setLefts] = useState<{ seekbar: number; zoomed: number }>({
    seekbar: 0,
    zoomed: 0,
  });
  const [seekbarRef, seekbarDimensions] = useDimensions();
  const [zoomedRef, zoomedDimensions] = useDimensions();

  const onHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      !seekbarDimensions ||
      !zoomedDimensions ||
      !zoomedDimensions.scrollWidth
    ) {
      setLefts({ seekbar: 0, zoomed: 0 });
      return;
    }
    var rect = (e.target as HTMLDivElement).getBoundingClientRect();
    var x = e.clientX - rect.left;
    const seekbarLength =
      seekbarDimensions.width / zoomedDimensions.scrollWidth;
    const value = x / seekbarDimensions.width - seekbarLength / 2;
    const cappedValue = Math.max(0, Math.min(1 - seekbarLength, value));
    setLefts({ seekbar: cappedValue, zoomed: value });
  };

  return (
    <div className="Seekbar" ref={seekbarRef}>
      <div className="Seekbar--main-wrapper">
        <div className="Seekbar--main">
          {props.clips.map((clip) => (
            <div
              key={clip.videoID + "_" + clip.clipID}
              className={
                "Seekbar--clip" +
                (props.currentClip.video === clip.videoID &&
                props.currentClip.clip === clip.clipID
                  ? " Seekbar--clip-active"
                  : "")
              }
              style={{ flexGrow: clip.length }}
            />
          ))}
        </div>
        <div className="Seekbar--hover" onMouseMove={onHover}>
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
