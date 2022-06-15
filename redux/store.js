import { configureStore } from "@reduxjs/toolkit";

import addProd from "./slices/product";
import cart from './slices/cart';


export const store = configureStore({
  reducer: {
    addProd,
    cart
  },


})