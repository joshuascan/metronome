import "./App.css";
import React, { useState, useCallback, useMemo } from "react";
import useInterval from "./hooks/useInterval";

import Display from "./components/Display";
import Tempo from "./components/Tempo";
import StartStopButton from "./components/StartStopButton";
import TimeSignature from "./components/TimeSignature";

import audio1 from "./audio/click1.mp3";
import audio2 from "./audio/click2.mp3";

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
    <div className="App">
      <Display bpm={bpm} beatsPerMeasure={beatsPerMeasure} />
      <Tempo bpm={bpm} setBpm={setBpm} setCount={setCount} playing={playing} />
      <TimeSignature
        beatsPerMeasure={beatsPerMeasure}
        setBeatsPerMeasure={setBeatsPerMeasure}
        setCount={setCount}
      />
      <StartStopButton
        playing={playing}
        setPlaying={setPlaying}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
