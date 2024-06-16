import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { QUIZ_DATA } from "../../mock/data";

const initialState: InitialState = {
  activeQuestion: 0,
  timeLeft: 0,
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setActiveQuestion(state, action) {
      if (state.activeQuestion > QUIZ_DATA.questions.length - 1) {
        return;
      }
      state.activeQuestion = action.payload;
    },

    setTimeLeft(state, action) {
      state.timeLeft = action.payload;
    },

    setAnswer(state, action) {
      const { questionID, userAnswer } = action.payload;
      state.answers.push({ questionID, answer: userAnswer });
    },
  },
});

export const { setActiveQuestion, setTimeLeft, setAnswer } = quizSlice.actions;

export { quizSlice };
