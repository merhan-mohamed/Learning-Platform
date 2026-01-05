import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLessonsAdmin,
  updateLesson,
  deleteLesson,
  createLesson
} from "../thunks/lessonsThunks";

const lessonsSlice = createSlice({
  name: "lessons",
  initialState: {
    lessons: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchLessonsAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLessonsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.lessons = action.payload;
      })

      //Create
      .addCase(createLesson.fulfilled,(state,action)=>{
         state.loading = false
        state.lessons.unshift(action.payload)
      })

      // Update
      .addCase(updateLesson.fulfilled, (state, action) => {
        const index = state.lessons.findIndex(
          (l) => l._id === action.payload._id
        );
        if (index !== -1) state.lessons[index] = action.payload;
      })

      // Delete
      .addCase(deleteLesson.fulfilled, (state, action) => {
        state.lessons = state.lessons.filter(
          (l) => l._id !== action.payload
        );
      });
  },
});

export default lessonsSlice.reducer;