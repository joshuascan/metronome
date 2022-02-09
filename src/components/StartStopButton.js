import React from "react";
import Button from "./Button";
import { MdPlayArrow, MdPause } from "react-icons/md";

export default function StartStopButton({ playing, setPlaying, setCount }) {
  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <h4>Start/Stop</h4>
      <Button size={"large"} handleClick={togglePlay}>
        {!playing ? <MdPlayArrow /> : <MdPause />}
      </Button>
    </div>
  );
}
