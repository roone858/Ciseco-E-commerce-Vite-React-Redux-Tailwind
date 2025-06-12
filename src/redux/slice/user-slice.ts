import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { AxiosError } from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, thunkAPI) => {
    console.log("fetching user from server");
    try {
      const response = await axios.get("http://localhost:3000/auth/profile");
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ error: axiosError.message });
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      if (state.data && typeof state.data === "object") {
        state.data = action.payload;
      }
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchUserInfo.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state: any, action: any) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchUserInfo.rejected, (state: any, action: any) => {
      return { ...state, error: action.payload.error, isLoading: false };
    });
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
