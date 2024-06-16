import styles from "./options.module.css";
type SelectProps = {
  onClick: (name: string, isCorrect: boolean) => void;
  option: { name: string; isCorrect: boolean };
};

const Select = ({ onClick, option }: SelectProps) => {
  return (
    <div className={styles.options}>
      <div className={styles.input} key={option.name}>
        <input
          onClick={() => onClick(option.name, option.isCorrect)}
          type="radio"
          name="question"
          id={option.name}
          required
        />
        <label htmlFor={option.name}>{option.name}</label>
      </div>
    </div>
  );
};

export default Select;
