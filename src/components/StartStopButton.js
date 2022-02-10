import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Text } from "../styles/GlobalComponents";
import { MdPlayArrow, MdPause } from "react-icons/md";

const StartStopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  margin-top: 1rem;
`;

export default function StartStopButton({ playing, setPlaying, setCount }) {
  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  return (
    <StartStopContainer>
      <Text large bold>
        Start/Stop
      </Text>
      <Button size={"large"} handleClick={togglePlay}>
        {!playing ? <MdPlayArrow /> : <MdPause />}
      </Button>
    </StartStopContainer>
  );
}
