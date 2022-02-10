import React, { useState, useCallback, useMemo } from "react";
import useInterval from "./hooks/useInterval";
import styled from "styled-components";

import Display from "./components/Display";
import Tempo from "./components/Tempo";
import TimeSignature from "./components/TimeSignature";
import StartStopButton from "./components/StartStopButton";

import audio1 from "./audio/click1.mp3";
import audio2 from "./audio/click2.mp3";

const Metronome = styled.div`
  text-align: center;
  background-color: #708090;
  width: 73rem;
  margin: 10rem auto;
  padding: 4rem 4rem 3.5rem 4rem;
  border-radius: 25px;
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid orange; */
`;

const BottomSection = styled.section`
  display: flex;
  justify-content: space-around;
  /* border: 1px solid green; */
  width: 50rem;
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
    if (count % beatsPerMeasure === 0) {
      click1.play();
    } else {
      click2.play();
    }
    setCount((count + 1) % beatsPerMeasure);
  }, [click1, click2, count, beatsPerMeasure]);

  useInterval(
    () => {
      playClick();
    },
    playing ? [60000 / bpm] : null
  );

  return (
    <Metronome>
      <TopSection>
        <Display bpm={bpm} beatsPerMeasure={beatsPerMeasure} />
        <StartStopButton
          playing={playing}
          setPlaying={setPlaying}
          setCount={setCount}
        />
      </TopSection>
      <BottomSection>
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
      </BottomSection>
    </Metronome>
  );
}

export default App;
