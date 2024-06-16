import styles from "./progress-bar.module.css";

type ProgressBarProps = {
  maxLength: number;
  activeQuestion: number;
};

const ProgressBar = ({ maxLength, activeQuestion }: ProgressBarProps) => {
  const step = Number((100 / maxLength).toFixed(2));

  const width = {
    width: step * (activeQuestion + 1) + "%",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["progress-bar"]} style={width}></div>
    </div>
  );
};

export default ProgressBar;
