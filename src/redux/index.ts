import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/product-slice";
import userSlice from "./slice/user-slice";
import loginSlice from "./slice/login-slice";
import shoppingCartSlice from "./slice/cart-slice";
import wishlistSlice from "./slice/wishlist-slice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    products: productsSlice,
    user: userSlice,
    cart: shoppingCartSlice,
    login: loginSlice,
  },
});
