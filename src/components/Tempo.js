import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import styled from "styled-components";
import { Text } from "../styles/GlobalComponents";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const TempoContainer = styled.div`
  width: 35%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
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
    setBpm(bpm + 1);
  };

  const decrement = () => {
    if (bpm <= 40) {
      return;
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
          <MdArrowDropUp />
        </Button>
        <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
        <Button type={"adjustment"} handleClick={increment}>
          <MdArrowDropDown />
        </Button>
      </AdjustmentsContainer>
    </TempoContainer>
  );
}
