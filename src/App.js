import "./App.css";
import React, { useState } from "react";

import Display from "./components/Display";
import Button from "./components/Button";
import Slider from "./components/Slider";

function App() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);

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
