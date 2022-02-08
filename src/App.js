import "./App.css";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import useInterval from "./hooks/useInterval";

import Display from "./components/Display";
import Button from "./components/Button";
import Slider from "./components/Slider";
import TimeSignature from "./components/TimeSignature";
import Metronome from "./components/Metronome";
import MetronomeHook from "./components/MetronomeHook";

import audio1 from "./audio/click1.mp3";
import audio2 from "./audio/click2.mp3";
import useMetronome from "./components/MetronomeHook";

function App() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  const click1 = useMemo(() => new Audio(audio1), []);
  const click2 = useMemo(() => new Audio(audio2), []);

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

  const playClick = useCallback(() => {
    if (count % beatsPerMeasure === 0) {
      click1.play();
    } else {
      click2.play();
    }
    setCount((count + 1) % beatsPerMeasure);
  }, [click1, click2, count, beatsPerMeasure]);

  useInterval(
    () => {
      playClick();
    },
    playing ? [60000 / bpm] : null
  );

  const togglePlay = () => {
    if (!playing) {
      setCount(0);
    }
    setPlaying(!playing);
  };

  //   useMetronome(playClick, 60000 / bpm, playing);

  return (
    <div className="App">
      <Display bpm={bpm} />
      <Button type="tempo" handleClick={increment}>
        +
      </Button>
      <Slider bpm={bpm} setBpm={setBpm} handleChange={changeSpeed} />
      <Button type="tempo" handleClick={decrement}>
        -
      </Button>
      {/* {playing ? (
        <Metronome beatFunction={playClick} beatInterval={60000 / bpm} />
      ) : null} */}

      <TimeSignature
        beatsPerMeasure={beatsPerMeasure}
        setBeatsPerMeasure={setBeatsPerMeasure}
        setCount={setCount}
      />
      <Button type="play" handleClick={togglePlay}>
        {!playing ? "Start" : "Stop"}
      </Button>
    </div>
  );
}

export default App;
