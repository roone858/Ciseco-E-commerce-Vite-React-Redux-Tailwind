// src/redux/wishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../interfaces";

const cartSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state: CartState, action) => {
      const item = state.items.find(
        (item) => item.productId == action.payload.productId
      );
      if (item) item.quantity = item.quantity + action.payload.quantity;
      else state.items.push({ ...action.payload });
    },
    removeFromCart: (state: CartState, action) => {
      state.items = state.items.filter(
        (item: CartItem) => item.productId !== action.payload
      );
    },
    setCart: (state: CartState, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
