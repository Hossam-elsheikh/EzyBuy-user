import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{items:[],total:0},
    reducers:{
        loadCart(state,action){
            state.items = action.payload
        }
    }

})
export const {loadCart} = CartSlice.actions
export default CartSlice.reducer