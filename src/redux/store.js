import { configureStore } from "@reduxjs/toolkit";
import filter from "../features/counter/filterSlise";
import basket from "../features/counter/basketSlise";
import bd from "../features/counter/DataBaseSlise";

export const store = configureStore({
  reducer: { filter, basket, bd },
});
