import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Text } from "../styles/GlobalComponents";
import { MdPlayArrow, MdPause } from "react-icons/md";

const StartStopContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  margin: 3rem 0;
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
