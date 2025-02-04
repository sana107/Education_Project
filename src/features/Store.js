import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice/BookSlice";
import SubExamsReducer from "./examSlice/subExamSlice";
import SubCategoryReducer from "./categoryslice/CategorySlice";

const store = configureStore({
  reducer: {
    Book: BookReducer,
    SubExam: SubExamsReducer,
    Category: SubCategoryReducer,
  },
});
export default store;
