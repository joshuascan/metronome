import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.display};
`;

export default function Display({ bpm, beatsPerMeasure }) {
  return (
    <DisplayContainer>
      <h2>{bpm} BPM</h2>
      <h3>{beatsPerMeasure} Beats</h3>
    </DisplayContainer>
  );
}
