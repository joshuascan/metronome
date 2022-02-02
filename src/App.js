import "./App.css";
import React, { useState, useEffect, useRef } from "react";

import Display from "./components/Display";
import Button from "./components/Button";
import Slider from "./components/Slider";

import audio1 from "./audio/click1.mp3";
import audio2 from "./audio/click2.mp3";

function App() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const timer = useRef();

  const click1 = new Audio(audio1);
  const click2 = new Audio(audio2);

  const increment = () => {
    if (bpm >= 220) {
      return;
    }
    setBpm(bpm + 1);
  };

  const decrement = () => {
    if (bpm <= 40) {
      return;
    }
    setBpm(bpm - 1);
  };

  const changeSpeed = (e) => {
    setBpm(Number(e.target.value));

    if (playing) {
      setCount(0);
    }
  };

  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
      click2.play();
    } else {
      click1.play();
    }
    setCount((prevCount) => (prevCount + 1) % beatsPerMeasure);
  };

  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  return (
    <div className="App">
      <Display bpm={bpm} />
      <Button type={"tempo"} handleClick={increment}>
        +
      </Button>
      <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
      <Button type={"tempo"} handleClick={decrement}>
        -
      </Button>
      <Button type={"play"} handleClick={togglePlay}>
        {!playing ? "Start" : "Stop"}
      </Button>
    </div>
  );
}

export default App;
