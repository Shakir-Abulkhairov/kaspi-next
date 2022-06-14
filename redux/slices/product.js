import { createSlice } from '@reduxjs/toolkit';



const addProd = createSlice({
  name: "product",
  initialState: {
    test: null
  },
  reducers: {
    addProdAc(state, action) {
      state.test = action.payload
    }
  }
})

export default addProd.reducer;
export const { addProdAc } = addProd.actions;
