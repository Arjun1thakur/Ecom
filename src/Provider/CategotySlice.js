import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    product:[],
    error:''
}

export const Categoryfetch=createAsyncThunk('/store',(data)=>{
    return (
        axios.get(`https://ecom-backend-9u2i.onrender.com/${data}`)
        .then(res=>{
            return res.data
        })
    )
})

let CategoryData=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(Categoryfetch.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(Categoryfetch.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.error=''
        })
        builder.addCase(Categoryfetch.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error=action.error.message
        })
    }
})

export default CategoryData.reducer