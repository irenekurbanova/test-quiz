import styles from "./options.module.css";
type CheckboxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, isCorrect: boolean) => void;
  option: { name: string; isCorrect: boolean };
};

const Checkbox = ({ onChange, option }: CheckboxProps) => {
  return (
    <div className={styles.options}>
      <div className={styles.input}>
        <input
          onChange={(event) => onChange(event, option.isCorrect)}
          type="checkbox"
          id={option.name}
          name={option.name}
          value={option.name}
        />
        <label htmlFor={option.name}>{option.name}</label>
      </div>
    </div>
  );
};

export default Checkbox;
