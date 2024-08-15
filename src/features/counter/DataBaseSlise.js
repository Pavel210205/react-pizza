import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Url from "../../components/Url";

export const fetchPizzas = createAsyncThunk(
  "Database/fetchPizzasStatus",
  async (params) => {
    const { categoriesId, sortType, searchValue, currentPage } = params;
    const { data } = await axios.get(
      Url(categoriesId, sortType, searchValue, currentPage)
    );
    return data;
  }
);

const initialState = {
  DataBase: [],
  status: "loading",
};

const DataBaseSlice = createSlice({
  name: "Database",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.DataBase = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.DataBase = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        console.log("error");
        state.DataBase = [];
      });
  },
});
export const selectorBd = (state) => state.bd;
export default DataBaseSlice.reducer;
