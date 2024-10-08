// redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-async-storage/async-storage"; // !!!Use AsyncStorage for React Native
import { combineReducers } from "redux"; 
import CartReducers from "./slices/CartSlice";
import FavoriteItemSlice from "./slices/FavoriteItemSlice";

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart","favorites"], 
};

 

 
const rootReducer = combineReducers({
    cart: CartReducers,
    favorites: FavoriteItemSlice,
});

 
const persistedReducer = persistReducer(persistConfig, rootReducer);

 
const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };


