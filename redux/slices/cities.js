import { createSlice } from '@reduxjs/toolkit';

const cities = createSlice({
  name: "cities",
  initialState: {
    cityItems: null,
    cityItem: null
  },
  reducers: {
    addCities: (state, { payload }) => {
      state.cityItems = payload;
    },
    addCity: (state, { payload }) => {
      state.cityItem = payload;
    }
  }
})

export default cities.reducer;
export const { addCities, addCity } = cities.actions;