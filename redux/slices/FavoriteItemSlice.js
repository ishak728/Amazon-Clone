import { createSlice } from "@reduxjs/toolkit";

const FavoriteItemSlice=createSlice({
    name:"favoriteItem",
    initialState:{
        favoriteItems:[],
    },
    reducers:{
        addItemToFavorites:(state,action)=>{
            const item=state.favoriteItems.find((item)=>item.id===action.payload.id)
            if(!item){
                state.favoriteItems.push(action.payload)
            }
        },
        removeItemFromFavorites:(state,action)=>{
            const newFavoriteItems=state.favoriteItems.filter((item)=>item.id!==action.payload.id)
            state.favoriteItems=newFavoriteItems
        },
    }
})

export const {addItemToFavorites,removeItemFromFavorites}=FavoriteItemSlice.actions

export default FavoriteItemSlice.reducer