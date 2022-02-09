import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import styled from "styled-components";
import { IoMdArrowDropleftCircle } from "react-icons/io";

const TempoContainer = styled.div`
  width: 40%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
`;

const AdjustmentsContainer = styled.div`
  display: flex;
  justify-content: center;
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
        <Button type={"adjustment"} handleClick={decrement}>
          <IoMdArrowDropleftCircle />
        </Button>
        <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
        <Button type={"adjustment"} handleClick={increment}>
          +
        </Button>
      </AdjustmentsContainer>
    </TempoContainer>
  );
}
