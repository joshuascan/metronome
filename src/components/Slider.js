import React from "react";

export default function Slider(props) {
  return (
    <div>
      <input
        type={"range"}
        value={props.bpm}
        onChange={props.handleChange}
        min={40}
        max={220}
        className="slider"
      />
    </div>
  );
}
