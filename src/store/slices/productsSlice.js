import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productsAction = createAsyncThunk('products/all',async(category)=>{
    try{
        const res = await  axios.get(`http://localhost:3333/product/${category}`)
        // for each category compare fav products 
        let fav = ['ss','sss']
            res.data.forEach(element => {
                ///////////
            });
          return res.data
    }catch(err){
        console.log(err.message);
    }
})

const ProductsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        isLoading:false,
        error:''
    },
    extraReducers :(builder)=>{
        builder.addCase(productsAction.fulfilled, (state,action)=>{
            state.products = action.payload
            state.isLoading = false;
        }),
        builder.addCase(productsAction.pending, (state,action)=>{
            state.isLoading = true;
        }),
        builder.addCase(productsAction.rejected, (state,action)=>{
            state.error = action.payload
        })
    }
})
export default ProductsSlice.reducer
