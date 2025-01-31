import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice/BookSlice"

const store = configureStore({
    reducer :{
        Book:BookReducer
    }
})
export default store;