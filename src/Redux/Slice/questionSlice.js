import { createSlice } from "@reduxjs/toolkit";
import {
  fetchQuestionsByExam,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../thunks/questionThunks";

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearQuestions: (state) => {
      state.questions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsByExam.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestionsByExam.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestionsByExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createQuestion.fulfilled, (state, action) => {
        state.questions.push(action.payload);
      })

      .addCase(updateQuestion.fulfilled, (state, action) => {
        const index = state.questions.findIndex(
          (q) => q._id === action.payload._id
        );
        if (index !== -1) state.questions[index] = action.payload;
      })

      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.questions = state.questions.filter(
          (q) => q._id !== action.payload
        );
      });
  },
});

export const { clearQuestions } = questionSlice.actions;
export default questionSlice.reducer;
