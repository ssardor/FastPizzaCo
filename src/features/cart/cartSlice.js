import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 0,
      name: "Pepperoni",
      unitPrice: 0,
      quantity: 0,
      totalPrice: 0,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateUsername } = cartSlice.actions;

export default cartSlice.reducer;
