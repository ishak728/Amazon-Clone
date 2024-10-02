import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const newCart = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = newCart
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item.quantity === 1) {
                item.quantity = 0 //unnecessary
                const newCart = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = newCart

            }else{
                item.quantity--
            }
        },
        clearCart: (state, action) => {
            state.cart=[]
        },
    }
})

export const{addToCart,removeItem,incrementQuantity,decrementQuantity,clearCart}=CartSlice.actions

export default CartSlice.reducer