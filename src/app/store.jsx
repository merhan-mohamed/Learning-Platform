import { configureStore } from "@reduxjs/toolkit";

// auth
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/auth/userSlice";

// dashboard
import dashboardReducer from "../Redux/Slice/dashboardSlice";

// admin
import usersReducer from "../Redux/Slice/usersSlice";
import coursesReducer from "../Redux/Slice/lessonsSlice";
// import lessonsReducer from "../Redux/Slice/lessonSlice";
import examsReducer from "../Redux/Slice/examSlice";
import questionReducer from "../Redux/Slice/questionSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,

    dashboard: dashboardReducer,
    users: usersReducer,
    courses: coursesReducer,
    exams: examsReducer,
    questions: questionReducer,
  },
});