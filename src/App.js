import React, { useState, useCallback, useMemo } from "react";
import useInterval from "./hooks/useInterval";
import styled from "styled-components";

import Display from "./components/Display";
import Tempo from "./components/Tempo";
import TimeSignature from "./components/TimeSignature";
import StartStopButton from "./components/StartStopButton";
import Speaker from "./components/Speaker";

import audio1 from "./audio/click1.wav";
import audio2 from "./audio/click2.wav";

const Metronome = styled.div`
  text-align: center;
  background-color: #708090;
  width: 73rem;
  margin: 10rem auto;
  padding: 4rem 4rem 3.5rem 4rem;
  border-radius: 25px;
  border: 0.5rem solid #565659;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const LeftSection = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0 0 3rem;
  width: fit-content;
`;

const AdjustmentsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

function App() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  const click1 = useMemo(() => new Audio(audio1), []);
  const click2 = useMemo(() => new Audio(audio2), []);

  const playClick = useCallback(() => {
    if (count === 0 || count === beatsPerMeasure) {
      setCount(1);
      click1.play();
    } else {
      setCount(count + 1);
      click2.play();
    }
  }, [click1, click2, count, beatsPerMeasure]);

  useInterval(
    () => {
      playClick();
    },
    playing ? [60000 / bpm] : null
  );

  return (
    <Metronome>
      <ContentContainer>
        <LeftSection>
          <Display
            bpm={bpm}
            beatsPerMeasure={beatsPerMeasure}
            count={count}
            playing={playing}
          />
          <AdjustmentsContainer>
            <Tempo
              bpm={bpm}
              setBpm={setBpm}
              setCount={setCount}
              playing={playing}
            />
            <TimeSignature
              beatsPerMeasure={beatsPerMeasure}
              setBeatsPerMeasure={setBeatsPerMeasure}
              setCount={setCount}
            />
          </AdjustmentsContainer>
        </LeftSection>
        <RightSection>
          <Speaker />
          <StartStopButton
            playing={playing}
            setPlaying={setPlaying}
            setCount={setCount}
          />
        </RightSection>
      </ContentContainer>
    </Metronome>
  );
}

export default App;
