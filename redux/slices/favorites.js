import { createSlice } from '@reduxjs/toolkit';

const favorites = createSlice({
  name: "favorites",
  initialState: {
    favoriteItems: [],
    isFavorite: false
  },
  reducers: {
    addFavorite: (state, action) => {
      const itemIndex = state.favoriteItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.favoriteItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.favoriteItems.push(tempProduct);
        state.isFavorite = true;
      }
    },
    removeFromCart(state, { payload }) {
      const removeCard = state.favoriteItems.filter(item => item.id !== payload.id);
      state.favoriteItems = removeCard;
    },
  }
})

export default favorites.reducer;
export const { addFavorite, removeFromCart } = favorites.actions;