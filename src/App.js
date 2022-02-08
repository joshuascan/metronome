import "./App.css";
import React, { useState, useCallback, useMemo } from "react";
import useInterval from "./hooks/useInterval";

import Display from "./components/Display";
import Tempo from "./components/Tempo";
import Button from "./components/Button";
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

  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  return (
    <div className="App">
      <Display bpm={bpm} beatsPerMeasure={beatsPerMeasure} />
      <Tempo bpm={bpm} setBpm={setBpm} setCount={setCount} playing={playing} />

      <TimeSignature
        beatsPerMeasure={beatsPerMeasure}
        setBeatsPerMeasure={setBeatsPerMeasure}
        setCount={setCount}
      />
      <Button type="play" handleClick={togglePlay}>
        {!playing ? "Start" : "Stop"}
      </Button>
    </div>
  );
}

export default App;
