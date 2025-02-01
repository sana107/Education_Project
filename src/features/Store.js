import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice/BookSlice";
import SubExamsReducer from "./examSlice/subExamSlice";
const store = configureStore({
  reducer: {
    Book: BookReducer,
    SubExam: SubExamsReducer,
  },
});
export default store;
