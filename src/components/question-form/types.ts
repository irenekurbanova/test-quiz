import { Question } from "../../mock/types";

export type QuizProps = {
  onSubmit: (userAnswer: { name: string; isCorrect: boolean }[]) => void;
  question: Question;
};

export type UserAnswerProps = {
  name: string;
  isCorrect: boolean;
};
