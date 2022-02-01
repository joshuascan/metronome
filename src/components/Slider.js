import React from "react";

export default function Slider(props) {
  const handleChange = (e) => {
    props.setBpm(Number(e.target.value));
  };

  return (
    <div>
      <input
        type={"range"}
        value={props.bpm}
        onChange={handleChange}
        min={40}
        max={220}
        className="slider"
      />
    </div>
  );
}
