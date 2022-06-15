import { createSlice } from '@reduxjs/toolkit';



const addProd = createSlice({
  name: "product",
  initialState: {
    items: []
  },
  reducers: {
    addProdAc(state, action) {
      state.items.push(action.payload);
    }
  }
})

export default addProd.reducer;
export const { addProdAc } = addProd.actions;
