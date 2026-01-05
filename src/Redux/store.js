import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./Slice/usersSlice";
import coursesReducer from "./Slice/coursesSlice";
import lessonsReducer from "./Slice/lessonSlice";
import dashboardReducer from "./Slice/dashboardSlice";
import examsReducer from "./Slice/examsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    lessons: lessonsReducer,
    dashboard: dashboardReducer,
    exams: examsReducer,
  },
});