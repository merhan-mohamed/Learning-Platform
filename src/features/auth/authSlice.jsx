import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId") || null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      
    },
    logout: (state) => {
      state.token = "";
      state.role = "";
      state.userId = "";
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
