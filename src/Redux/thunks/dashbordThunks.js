import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [usersRes, examsRes, lessonsRes] = await Promise.all([
        axios.get("/api/v1/admin/all-user", { headers }),
        axios.get("/api/v1/exams/", { headers }),
        axios.get("/api/v1/lesson", { headers }),
      ]);

      return {
        usersCount: usersRes.data.data.length,
        examsCount: examsRes.data.data.length,
        lessonsCount: lessonsRes.data.data.length,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to load dashboard"
      );
    }
  }
);


