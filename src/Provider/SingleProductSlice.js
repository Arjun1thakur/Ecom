import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    product:[],
    error:''
}

export const fetchSingleProduct=createAsyncThunk('store/product',(data)=>{
    return (
        axios.get(`/store/${data}`)
        .then((res)=>{
            return res.data
        })
    )
})

let singleProduct=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchSingleProduct.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.error=''
        })
        builder.addCase(fetchSingleProduct.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error=action.error.message
        })
    }
})

export default singleProduct.reducer