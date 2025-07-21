// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find((i) => i.idMeal === action.payload.idMeal);
      if (item) item.qty += 1;
      else state.push({ ...action.payload, qty: 1 });
    },
    removeFromCart(state, action) {
      return state.filter((i) => i.idMeal !== action.payload);
    },
    incrementQty(state, action) {
      const item = state.find((i) => i.idMeal === action.payload);
      if (item) item.qty += 1;
    },
    decrementQty(state, action) {
      const item = state.find((i) => i.idMeal === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
