import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./slices/CartSlice";



export const store=configureStore({
    reducer:{
        cart:CartReducers
    }
})