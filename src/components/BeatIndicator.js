import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { MdMusicNote } from "react-icons/md";

const BeatIndicatorContainer = styled.div`
  margin: 3rem auto;
  text-align: left;
  width: 80%;
  display: flex;
`;

const enlarge = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.3)}
    100% {transform: scale(1)}
`;

const Span = styled.div`
  animation: ${enlarge} 0.15s;
`;

export default function BeatIndicator({ count, playing, bpm }) {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    if (playing && count > 0) {
      if (count === 4) {
        setTimeout(() => setBeats([]), 60000 / bpm - 1);
      }
      setBeats((beat) => {
        return [...beat, count];
      });
    } else {
      setBeats([]);
    }
  }, [count, playing, bpm]);

  return (
    <BeatIndicatorContainer>
      {beats.map((beat) => (
        <Span>
          <MdMusicNote size={"4rem"} key={beat} />
        </Span>
      ))}
    </BeatIndicatorContainer>
  );
}
