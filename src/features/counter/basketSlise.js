import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrise: 0,
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, action) {
      const basketFilter = state.basket.find(
        (obj) => obj.id === action.payload.id
      );
      if (basketFilter) {
        basketFilter.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      state.totalPrise = state.basket.reduce((sum, obj) => {
        const sumObj = obj.price * obj.count + sum;
        return sumObj;
      }, 0);
    },
    removeBasket(state, action) {
      const basketFilter = state.basket.find(
        (obj) => obj.id === action.payload
      );
      if (basketFilter.count > 1) {
        basketFilter.count--;
      } else {
        state.basket = state.basket.filter((obj) => obj.id !== action.payload);
      }
      state.totalPrise = state.basket.reduce((sum, obj) => {
        const sumObj = obj.price * obj.count + sum;
        return sumObj;
      }, 0);
    },
    deleteBasket(state, action) {
      state.basket = state.basket.filter((obj) => obj.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = [];
      state.totalPrise = 0;
    },
  },
});
export const selectorBasket = (state) => state.basket;

export const selectorBasketCartItem = (id) => (state) =>
  state.basket.basket.find((obj) => obj.id === id);
export const { addBasket, removeBasket, clearBasket, deleteBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
