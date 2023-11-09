import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productsAction = createAsyncThunk('products/all',async()=>{
    const res = await  axios.get(`http://localhost:3333/product/all`)
    console.log(res);
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