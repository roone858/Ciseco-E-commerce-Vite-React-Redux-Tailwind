// cartSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../types";

const loadCartStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [], total: 0 };
    }
    return JSON.parse(serializedState) as CartState;
  } catch (error) {
    console.error("Error loading cart state from localStorage:", error);
    return { items: [], total: 0 };
  }
};

const saveCartStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving cart state to localStorage:", error);
  }
};
const initialState: CartState = loadCartStateFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) existingItem.count += newItem.count;
      else state.items.push(newItem);

      state.total += newItem.price * newItem.count;
      saveCartStateToLocalStorage(state);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const removedItem = action.payload;
      state.items = state.items.filter((item) => item.productId !== removedItem.productId);
      state.total -= removedItem.price;
      saveCartStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartStateToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
