export type TimerProps = {
  duration: number;
  setIsTimesUp: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};
