import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./Features/inputSlice"

export const store = configureStore({
    reducer :{
        input:inputReducer,
    }
});