import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Text } from "../styles/GlobalComponents";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const TimeSignatureContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function TimeSignature({
  beatsPerMeasure,
  setBeatsPerMeasure,
  setCount,
}) {
  const increaseTimeSignature = () => {
    if (beatsPerMeasure >= 12) {
      return;
    }
    setBeatsPerMeasure(beatsPerMeasure + 1);
    setCount(0);
  };
  const decreaseTimeSignature = () => {
    if (beatsPerMeasure <= 2) {
      return;
    }
    setBeatsPerMeasure(beatsPerMeasure - 1);
    setCount(0);
  };

  return (
    <TimeSignatureContainer>
      <Text bold>
        Beats Per
        <br /> Measure
      </Text>
      <ButtonContainer>
        <Button handleClick={increaseTimeSignature}>
          <MdArrowDropUp />
        </Button>
        <Button handleClick={decreaseTimeSignature}>
          <MdArrowDropDown />
        </Button>
      </ButtonContainer>
    </TimeSignatureContainer>
  );
}
