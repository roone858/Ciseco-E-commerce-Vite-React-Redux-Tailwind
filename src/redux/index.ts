import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/product-slice";
import customersSlice from "./slice/customer-slice";
import loginSlice from "./slice/login-slice";
import shoppingCartSlice from "./slice/shoppingCart-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    customers: customersSlice,
    cart: shoppingCartSlice,
    login: loginSlice,
  },
});
