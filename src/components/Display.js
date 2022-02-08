import React from "react";

export default function Display({ bpm, beatsPerMeasure }) {
  return (
    <div>
      <h2>{bpm} BPM</h2>
      <h3>{beatsPerMeasure} Beats</h3>
    </div>
  );
}
