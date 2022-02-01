import "./App.css";
import React, { useState } from "react";

import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [bpm, setBpm] = useState(100);

  const increment = () => {
    setBpm(bpm + 1);
  };

  const decrement = () => {
    setBpm(bpm - 1);
  };

  return (
    <div className="App">
      <Display bpm={bpm} />
      <Button handleClick={increment}>+</Button>
      <Button handleClick={decrement}>-</Button>
    </div>
  );
}

export default App;
