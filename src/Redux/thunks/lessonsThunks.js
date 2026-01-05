import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://edu-master-psi.vercel.app";

export const fetchLessonsAdmin = createAsyncThunk(
  "lessons/fetchAdmin",
  async ({ token, params }, thunkAPI) => {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${BASE_URL}/lesson?${query}`, {
        headers: { token },
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);



export const createLesson = createAsyncThunk(
  "lessons/create",
  async ({ token, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/lesson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


export const updateLesson = createAsyncThunk(
  "lessons/update",
  async ({ token, id, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/lesson/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteLesson = createAsyncThunk(
  "lessons/delete",
  async ({ token, id }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/lesson/${id}`, {
        method: "DELETE",
        headers: { token },
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);