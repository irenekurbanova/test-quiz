import { useEffect, useLayoutEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../shared/utils/local-storage";
import styles from "./timer.module.css";
import { TimerProps } from "./types";

const Timer = ({ duration, setIsTimesUp, setTimeLeft }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);

  useLayoutEffect(() => {
    const time = getLocalStorage("time");
    if (time) {
      setTimeRemaining(time);
    }
  }, []);

  // countdown timer
  useEffect(() => {
    if (timeRemaining < 0) {
      setIsTimesUp(true);
    }
    const intervalId = setInterval(() => {
      setTimeRemaining(timeRemaining - 1000);
      setTimeLeft(timeRemaining);
      setLocalStorage("time", timeRemaining - 1000);
      setsecs(Math.floor((timeRemaining / 1000) % 60));
      setmins(Math.floor((timeRemaining / 1000 / 60) % 60));
      sethours(Math.floor((timeRemaining / 1000 / 60 / 60) % 24));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setIsTimesUp, setTimeLeft, timeRemaining]);

  return (
    <div className={styles.timer}>
      <p>
        {hours > 0 ? `${hours.toString().padStart(2, "0") + " : "}` : ""}
        {mins > 0 ? `${mins.toString().padStart(2, "0") + " : "}` : "00 : "}
        {secs > 0 ? `${secs.toString().padStart(2, "0")}` : "00"}
      </p>
    </div>
  );
};

export default Timer;
