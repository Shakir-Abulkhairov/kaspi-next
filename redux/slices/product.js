import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchItems = createAsyncThunk(
//   'product/fetchItems',
//   async function () {
//     const response = await fetch('http://localhost:3000/api/producrApi/get-product');

//     const data = response.json();
//     return data;
//   }
// )

const addProd = createSlice({
  name: "product",
  initialState: {
    items: []
  },
  reducers: {
    addProdAc(state, action) {
      state.items.push(action.payload);
    }
  },
  // extraReducers: {
  //   [fetchItems.fulfilled]: (state, { payload }) => {
  //     state.items = payload;
  //   }
  // }
})

export default addProd.reducer;
export const { addProdAc } = addProd.actions;
