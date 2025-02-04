import { createSlice } from "@reduxjs/toolkit";
const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    categoryData: [],
  },
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
      console.log(action.payload, "hi im in");
    },
  },
});

export const { setCategoryData } = CategorySlice.actions;
export default CategorySlice.reducer;
