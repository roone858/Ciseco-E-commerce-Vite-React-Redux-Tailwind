// reviewSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewsState, State } from "../../interfaces";
import reviewsService from "../../services/reviews.service";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

// Async Thunk Action for Fetching Reviews
export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (productId: string, { rejectWithValue }) => {
    try {
      const reviews = await reviewsService.getProductReviews(productId); // Update your API function to accept productId
      return reviews;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state: ReviewsState, action) => {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state: ReviewsState, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReview } = reviewSlice.actions;

export const selectReviews = (state: State) => state.reviews.reviews;
export const selectLoading = (state: State) => state.reviews.loading;
export const selectError = (state: State) => state.reviews.error;

export default reviewSlice.reducer;
