import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
      console.log(state);
    },
    increaseCart(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId == action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseCart(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId == action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((calc, item) => calc + item.quantity, 0);
};
export const getTotalPriceQuantity = (state) => {
  return state.cart.cart.reduce((calc, item) => calc + item.totalPrice, 0);
};

export const getCurrentQuantity = (id) => {
  return (state) => state.cart.cart.find((item) => item.pizzaId === id);
};

export const { addToCart, deleteCart, clearCart, increaseCart, decreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
