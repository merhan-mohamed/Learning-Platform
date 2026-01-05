import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardData } from "../thunks/dashbordThunks";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    usersCount: 0,
    examsCount: 0,
    lessonsCount: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.usersCount = action.payload.usersCount;
        state.examsCount = action.payload.examsCount;
        state.lessonsCount = action.payload.lessonsCount;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;