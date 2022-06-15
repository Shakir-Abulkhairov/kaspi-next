import { createSlice } from '@reduxjs/toolkit';



const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    addCard(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    },
    addTotalCount(state, { payload }) {
      state.totalPrice += Math.ceil(payload);
      const addedItems = state.items.cartQuantity
      state.totalCount = addedItems.length
    }
  }
})

export default cart.reducer;
export const { addCard, addTotalCount } = cart.actions;