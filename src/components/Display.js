import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20rem;
  width: 70%;
  padding: 2rem;
  background-color: #a18c54;
  border: 5px solid #404952;
  border-radius: 6px;
`;

const Number = styled.p`
  font-family: ${(props) => props.theme.fonts.display};
  font-style: italic;
  font-size: 4rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 2rem;
`;

export default function Display({ bpm, beatsPerMeasure }) {
  return (
    <DisplayContainer>
      <div>
        <Text>TEMPO</Text>
        <Number size={"3rem"}>{bpm}</Number>
      </div>
      <div>
        <Text>BEAT</Text>
        <Number size={"3rem"}>{beatsPerMeasure}</Number>
      </div>
    </DisplayContainer>
  );
}
