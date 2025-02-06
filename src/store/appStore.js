import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice"
import moviesReducer from "./movieSlice"

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})