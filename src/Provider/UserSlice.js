import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    User:[],
    error:''
}

export const SendUser=createAsyncThunk('store/product',(data)=>{
    let config={Headers:{"content-Type":"application/json"}}
    return (
        axios.post(`https://ecom-backend-9u2i.onrender.com/signup`,data,config)
        .then((res)=>{
            return res
        })
    )
})

let UserData=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(SendUser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(SendUser.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.error=''
        })
        builder.addCase(SendUser.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error=action.error.message
        })
    }
})

export default UserData.reducer