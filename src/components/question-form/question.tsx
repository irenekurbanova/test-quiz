import { useState } from "react";
import { QuestionType } from "../../mock/types";
import { QuizProps, UserAnswerProps } from "./types";
import Select from "./question-options/select";
import Textarea from "./question-options/textarea";
import Checkbox from "./question-options/checkbox";
import styles from "./question.module.css";

const QuestionForm = ({ question, onSubmit }: QuizProps) => {
  const [userAnswer, setUserAnswer] = useState<UserAnswerProps[]>([]);
  // const [userAnswer, setUserAnswer] = useState<UserAnswerProps>({ name: [], isCorrect: false });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // onSubmit([userAnswer]);
    // setUserAnswer({ name: [], isCorrect: false });

    onSubmit(userAnswer);
    setUserAnswer([]);
  }

  function handleSelectChange(name: string, isCorrect: boolean) {
    setUserAnswer([{ name, isCorrect }]);
  }

  function handleTextareaChange(value: string) {
    setUserAnswer([{ name: value, isCorrect: false }]);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>, isCorrect: boolean) {
    const { value, checked } = event.target;
    if (checked) {
      setUserAnswer((prev) => [...prev, { name: value, isCorrect }]);
    } else {
      setUserAnswer((prev) => {
        return prev.filter((item) => item.name !== value);
      });
    }
  }

  const btnDisabled = !userAnswer.length || userAnswer.some((item) => item.name === "");

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>{question.name}</h3>

      {question.type === QuestionType.LONG && <Textarea onChange={handleTextareaChange} />}

      {question.type === QuestionType.SINGLE &&
        question.options.map((option) => {
          return <Select key={option.name} onClick={handleSelectChange} option={option} />;
        })}

      {question.type === QuestionType.MULTIPLE &&
        question.options.map((option) => {
          return <Checkbox key={option.name} onChange={handleCheckboxChange} option={option} />;
        })}
      <button disabled={btnDisabled} className={styles.button}>
        Ответить
      </button>
    </form>
  );
};

export default QuestionForm;
