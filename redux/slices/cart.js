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
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    },
    addTotalCount(state, { payload }) {
      state.totalPrice += Math.ceil(payload);
    },
    removeFromCart(state, { payload }) {
      const removeCard = state.items.filter(item => item.id !== payload.id);
      state.items = removeCard;
    },
    decreaseFromCart(state, { payload }) {
      const cardIndex = state.items.findIndex(item => item.id === payload.id);

      if (state.items[cardIndex].cartQuantity > 1) {
        state.items[cardIndex].cartQuantity -= 1;
      } else if (state.items[cardIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.id !== payload.id
        );

        state.items = nextCartItems;

      }

    },
    removeCart(state) {
      state.items = [];
    },
    getTotalPrice(state) {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {

          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.totalCount = quantity;
      state.totalPrice = total;
    }
  }
})

export default cart.reducer;
export const { addCard, addTotalCount, removeFromCart, decreaseFromCart, removeCart, getTotalPrice } = cart.actions;