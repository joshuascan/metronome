import React from "react";
import Button from "./Button";

export default function TimeSignature({
  beatsPerMeasure,
  setBeatsPerMeasure,
  setCount,
}) {
  const increaseTimeSignature = () => {
    if (beatsPerMeasure >= 12) {
      return;
    }
    setBeatsPerMeasure(beatsPerMeasure + 1);
    setCount(0);
  };
  const decreaseTimeSignature = () => {
    if (beatsPerMeasure <= 2) {
      return;
    }
    setBeatsPerMeasure(beatsPerMeasure - 1);
    setCount(0);
  };

  return (
    <div>
      <Button handleClick={increaseTimeSignature}>+</Button>
      <h4>Beats Per Measure</h4>
      <Button handleClick={decreaseTimeSignature}>-</Button>
    </div>
  );
}
