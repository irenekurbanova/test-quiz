export interface InitialState {
  activeQuestion: number;
  timeLeft: number;
  answers: { questionID: string; answer: { name: string; isCorrect: boolean }[] }[];
}
