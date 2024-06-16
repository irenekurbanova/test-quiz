import { useLayoutEffect, useState } from "react";
import { useQuizData } from "../../shared/hooks/set-quiz";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hook";
import { setActiveQuestion, setAnswer, setTimeLeft } from "../../app/store/reducer";
import { getLocalStorage, setLocalStorage } from "../../shared/utils/local-storage";
import Header from "../../components/header/header";
import Timer from "../../components/timer/timer";
import ProgressBar from "../../components/progress-bar/progress-bar";
import CompleteTest from "../../components/complete/CompleteTest";
import QuestionForm from "../../components/question-form/question";
import styles from "./quiz.module.css";
import { UserAnswerProps } from "../../components/question-form/types";

const Quiz = () => {
  const data = useQuizData();
  const dispatch = useAppDispatch();
  const [isTimesUp, setIsTimesUp] = useState(false);
  const [secLeft, setSecLeft] = useState(data.maxDuration);
  const activeQuestion = useAppSelector((state) => state.quizSlice.activeQuestion);
  const lastQuestion = activeQuestion === data.questions.length;

  useLayoutEffect(() => {
    const data = getLocalStorage("data");
    const time = getLocalStorage("time");

    time < 0 ? setIsTimesUp(true) : setIsTimesUp(false);

    if (data && time && lastQuestion && data.userAnswer[0].name.length === 0) {
      dispatch(setActiveQuestion(data.curIndex));
      dispatch(setTimeLeft(time));
      setSecLeft(data.maxDuration - time);
    }
    if (data && time && !lastQuestion) {
      dispatch(setActiveQuestion(data.curIndex));
      dispatch(setTimeLeft(time));
      setSecLeft(data.maxDuration - time);
    }
  }, [dispatch, lastQuestion]);

  function handleSubmit(userAnswer: UserAnswerProps[]) {
    dispatch(setAnswer({ questionID: data.questions[activeQuestion].id, userAnswer }));
    if (!lastQuestion) {
      dispatch(setActiveQuestion(activeQuestion + 1));
    }
    dispatch(setTimeLeft(secLeft));
    const curIndex = activeQuestion + 1;
    setLocalStorage("data", { curIndex, userAnswer });
  }

  return (
    <>
      {(isTimesUp || lastQuestion) && <CompleteTest />}
      {!isTimesUp && !lastQuestion && (
        <>
          <div className={styles.wrapper}>
            <Header title={data.title} />
            {data?.timer && <Timer duration={secLeft} setIsTimesUp={setIsTimesUp} setTimeLeft={setSecLeft} />}
          </div>
          <ProgressBar maxLength={data.questions.length} activeQuestion={activeQuestion} />
          <QuestionForm question={data.questions[activeQuestion]} onSubmit={handleSubmit} />
        </>
      )}
    </>
  );
};

export default Quiz;
