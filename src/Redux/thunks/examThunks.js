import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://edu-master-psi.vercel.app";

export const fetchExamsAdmin = createAsyncThunk(
  "exam/fetchAll",
  async ({ token, params = {} }, thunkAPI) => {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${BASE_URL}/exam?${query}`, {
        headers: {
          token,
        },
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get exam by ID
export const fetchExamById = createAsyncThunk(
  "exam/fetchById",
  async ({ token, id }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/exam/${id}`, {
        headers: {
          token,
        },
      });

      const data = await res.json();
      if (!res.ok) throw data;
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// create exam
export const createExam = createAsyncThunk(
  "exam/create",
  async ({ token, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/exam`, {
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
);

// Update Exam
export const updateExam = createAsyncThunk(
  "exam/update",
  async ({ token, id, payload }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/exam/${id}`, {
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
    } catch (error) {}
  }
);




// DELEDE EXAM
export const deleteExam = createAsyncThunk(
    "exam/delete",
    async({token , id} , thunkAPI)=>{
        try {
            const res = await fetch(`${BASE_URL}/exam/${id}`,{
                method:"DELETE",
                headers:{token}
            })

            const data = await res.json();
            if(!res.ok) throw data;
            return data.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)