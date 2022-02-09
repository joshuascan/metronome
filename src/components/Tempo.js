import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import styled from "styled-components";

const TempoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AdjustmentsContainer = styled.div`
  display: flex;
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
      <h4>Tempo</h4>
      <AdjustmentsContainer>
        <Button handleClick={increment}>+</Button>
        <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
        <Button handleClick={decrement}>-</Button>
      </AdjustmentsContainer>
    </TempoContainer>
  );
}
