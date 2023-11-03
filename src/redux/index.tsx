import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/product-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
