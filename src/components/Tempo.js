import React from "react";
import Button from "./Button";
import Slider from "./Slider";

export default function Tempo({ bpm, setBpm, setCount, playing }) {
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
    if (playing) {
      setCount(0);
    }
    setBpm(Number(e.target.value));
  };

  return (
    <div>
      <h4>Tempo</h4>
      <Button type="tempo" handleClick={increment}>
        +
      </Button>
      <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
      <Button type="tempo" handleClick={decrement}>
        -
      </Button>
    </div>
  );
}
