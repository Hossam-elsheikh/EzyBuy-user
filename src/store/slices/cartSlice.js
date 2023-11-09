import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const CartSlice = createSlice({
    name:'cart',
    initialState:{items:JSON.parse(localStorage.getItem('cart'))||[]},
    reducers:{
        addToCart(state,action){
            let indexOfItem = state.items.findIndex((item)=>item.id === action.payload.id)
            if(indexOfItem == -1){
                state.items = [...state.items,action.payload]
                localStorage.setItem('cart',JSON.stringify(state.items))
            }
            else {
                state.items[indexOfItem].quantity += 1
                localStorage.setItem('cart',JSON.stringify(state.items))
            }
        },
        removeFromCart(state,action){
            let indexOfItem = state.items.findIndex((item)=>item.id === action.payload.id)
            if(state.items[indexOfItem].quantity >1){
                state.items[indexOfItem].quantity -= 1
                localStorage.setItem('cart',JSON.stringify(state.items))

            } else {
                state.items = state.items.filter(item=>item.id !== action.payload.id)
                localStorage.setItem('cart',JSON.stringify(state.items))

            }
        }
    }

})
export const {addToCart,removeFromCart} = CartSlice.actions
export default CartSlice.reducer