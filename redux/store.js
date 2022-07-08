import { configureStore } from "@reduxjs/toolkit";
import addProd from "./slices/product";
import cart from './slices/cart';
import cities from './slices/cities';
export const store = configureStore({
  reducer: {
    addProd,
    cart,
    cities
  }
});



