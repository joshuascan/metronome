import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import styled from "styled-components";
import { Text } from "../styles/GlobalComponents";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const TempoContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AdjustmentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Tempo({ bpm, setBpm, setCount, playing }) {
  const increment = () => {
    if (bpm >= 220) {
      return;
    }
    if (playing) {
      setCount(0);
    }
    setBpm(bpm + 1);
  };

  const decrement = () => {
    if (bpm <= 40) {
      return;
    }
    if (playing) {
      setCount(0);
    }
    setBpm(bpm - 1);
  };

  const changeSpeed = (e) => {
    if (playing) {
      setCount(0);
    }
    setBpm(Number(e.target.value));
  };

  return (
    <TempoContainer>
      <Text bold>Tempo</Text>
      <AdjustmentsContainer>
        <Button handleClick={decrement}>
          <MdArrowDropDown />
        </Button>
        <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
        <Button handleClick={increment}>
          <MdArrowDropUp />
        </Button>
      </AdjustmentsContainer>
    </TempoContainer>
  );
}
