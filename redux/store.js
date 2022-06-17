import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import addProd from "./slices/product";
import cart from './slices/cart';

const initStore = () => configureStore({
  reducer: {
    addProd,
    cart
  },
});
export const store = createWrapper(initStore)
