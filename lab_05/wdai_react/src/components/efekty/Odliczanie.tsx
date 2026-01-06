import React, { useEffect, useState } from "react";

const Odliczanie = () => {
  const [count, setCount] = useState(15);
  const [intervalId, setIntervalId] = useState(null);
  const [timerState, setTimerState] = useState("Start");
  const [disableButton, setDisableButton] = useState(false);

  const swapTimer = () => {
    if (intervalId === null) {
      startTimer();
      setTimerState("Stop");
    } else {
      stopTimer();
      setTimerState("Start");
    }
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setCount((prevCount) => Math.round((prevCount - 0.1) * 10) / 10);
    }, 100);
    setIntervalId(id);
  };

  useEffect(() => {
    if (count <= 0) {
      clearInterval(intervalId);
      setDisableButton(true);
      setTimerState("Odliczanie zakończone");
    }
  }, [count]);

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button id="b1" onClick={swapTimer} disabled={disableButton}>
        {timerState}
      </button>
    </div>
  );
};

export default Odliczanie;
