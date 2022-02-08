import { useEffect, useRef, useCallback } from "react";

const useMetronome = (handler, interval, isOn) => {
  const nextBeat = useRef();
  const id = useRef();

  const beat = useCallback(() => {
    nextBeat.current = new Date().getTime() + interval;
    id.current = setTimeout(beat, nextBeat.current - new Date().getTime());
    handler();
  }, [handler, interval]);

  useEffect(() => {
    if (isOn) {
      nextBeat.current = new Date().getTime() + interval;
      id.current = setTimeout(beat, nextBeat.current - new Date().getTime());

      return () => {
        clearTimeout(id.current);
      };
    }
  }, [beat, interval, isOn]);
};

export default useMetronome;
