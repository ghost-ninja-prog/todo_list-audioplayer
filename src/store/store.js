import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import audioPlayerReducer from "./audioPlayerSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        audio: audioPlayerReducer
    }
})