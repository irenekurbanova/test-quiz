import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./reducer";

export const store = configureStore({
  reducer: {
    quizSlice: quizSlice.reducer,
  },
});
