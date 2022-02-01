import React from "react";

export default function Slider(props) {
  const handleChange = ({ target: { value: newValue } }) => {
    props.setBpm(Number(newValue));
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
