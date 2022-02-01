import "./App.css";
import React, { useState } from "react";

import Display from "./components/Display";
import Button from "./components/Button";
import Slider from "./components/Slider";

import audio1 from "./audio/click1.mp3";

function App() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState();
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  const click1 = new Audio(audio1);

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

  const togglePlay = () => {
    if (!playing) {
      let timer = setInterval(click1.play(), (60 / bpm) * 1000);
    } else {
      clearInterval(timer);
    }
    setPlaying(!playing);
  };

  return (
    <div className="App">
      <Display bpm={bpm} />
      <Button type={"tempo"} handleClick={increment}>
        +
      </Button>
      <Slider bpm={bpm} setBpm={setBpm} />
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
