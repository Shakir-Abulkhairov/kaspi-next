import { configureStore } from "@reduxjs/toolkit";

import addProd from "./slices/product";



export const store = configureStore({
  reducer: {
    addProd
  },


})