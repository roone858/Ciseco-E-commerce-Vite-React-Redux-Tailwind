import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer, LoginState } from "../../types";

const initialState: LoginState = checkLocalStorage();

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<Customer>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export default loginSlice.reducer;

function checkLocalStorage () {
  const loginStorage = localStorage.getItem("login");
  if (loginStorage) return JSON.parse(loginStorage);
  else
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,
    };
}
