import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SearchValue: "",
  categoryId: 0,
  pageCount: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filteres",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.SearchValue = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});
export const selectorFilter = (state) => state.filter;
export const { setCategoryId, setSortType, setPageCount, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
