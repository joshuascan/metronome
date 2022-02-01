import React, { useState } from "react";

export default function Display() {
  const [bpm, setBpm] = useState(100);

  return (
    <div>
      <h2>{bpm}</h2>
    </div>
  );
}
