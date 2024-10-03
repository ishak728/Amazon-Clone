import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./slices/CartSlice";
import FavoritesReducers from "./slices/FavoriteItemSlice";



export const store=configureStore({
    reducer:{
        cart:CartReducers,
        favorites:FavoritesReducers
    }
})