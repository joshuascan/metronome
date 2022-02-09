import React from "react";
import Button from "./Button";
import { Text } from "../styles/GlobalComponents";
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
      <Text large bold>
        Start/Stop
      </Text>
      <Button size={"large"} handleClick={togglePlay}>
        {!playing ? <MdPlayArrow /> : <MdPause />}
      </Button>
    </div>
  );
}
