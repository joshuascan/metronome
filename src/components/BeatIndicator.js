import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdMusicNote } from "react-icons/md";

const BeatIndicatorContainer = styled.div`
  /* border: 1px solid red; */
  margin: 3rem auto;
  text-align: left;
  width: 80%;
`;

export default function BeatIndicator({ count, playing }) {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    if (playing) {
      if (count === 1) {
        setBeats([]);
      }
      setBeats((beat) => {
        return [...beat, count];
      });
    } else {
      setBeats([]);
    }
  }, [count, playing]);

  return (
    <BeatIndicatorContainer>
      {beats.map((beat) => (
        <MdMusicNote size={"4rem"} key={beat} />
      ))}
    </BeatIndicatorContainer>
  );
}
