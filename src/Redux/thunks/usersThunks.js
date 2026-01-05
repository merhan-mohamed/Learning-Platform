import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://edu-master-psi.vercel.app/admin/all-user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token, 
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }
  }
);