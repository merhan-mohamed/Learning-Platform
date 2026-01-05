



import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://edu-master-psi.vercel.app";

/* ================= FETCH ================= */
export const fetchQuestionsByExam = createAsyncThunk(
  "questions/fetchByExam",
  async ({ token, examId }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/question?exam=${examId}`, {
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

/* ================= CREATE ================= */
export const createQuestion = createAsyncThunk(
  "questions/create",
  async ({ token, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/question`, {
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
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

/* ================= UPDATE ================= */
export const updateQuestion = createAsyncThunk(
  "questions/update",
  async ({ token, id, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/question/${id}`, {
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

/* ================= DELETE ================= */
export const deleteQuestion = createAsyncThunk(
  "questions/delete",
  async ({ token, id }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/question/${id}`, {
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