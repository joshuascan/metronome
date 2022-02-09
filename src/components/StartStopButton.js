import React from "react";
import Button from "./Button";

export default function StartStopButton({ playing, setPlaying, setCount }) {
  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <Button handleClick={togglePlay}>{!playing ? "Start" : "Stop"}</Button>
    </div>
  );
}
