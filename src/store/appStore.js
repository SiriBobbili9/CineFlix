import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice"

export const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})