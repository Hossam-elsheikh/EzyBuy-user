import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productsAction = createAsyncThunk('products/all',async(category)=>{
    const res = await  axios.get(`http://localhost:3333/product/${category}`)
    // for each category compare fav products 
    let fav = ['ss','sss']
        res.data.forEach(element => {
            ///////////
        });
      return res.data
  })

const ProductsSlice = createSlice({
    name:'products',
    initialState:{products:[]},
    extraReducers :(builder)=>{
        builder.addCase(productsAction.fulfilled, (state,action)=>{
            state.products = action.payload
        })
    }

})
export default ProductsSlice.reducer