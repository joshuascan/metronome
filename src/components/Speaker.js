import React from "react";
import styled from "styled-components";

const SpeakerContainer = styled.div`
  width: 14rem;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SoundHole = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: black;
  padding: 0;
  margin: 0 0.75rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export default function Speaker() {
  return (
    <SpeakerContainer>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
      <Row>
        <SoundHole />
        <SoundHole />
        <SoundHole />
      </Row>
    </SpeakerContainer>
  );
}
