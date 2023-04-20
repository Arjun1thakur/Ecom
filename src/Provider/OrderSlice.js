import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    Orders:[],
    error:''
}

export const OrdersSend=createAsyncThunk('orders',(data)=>{
    let config={Headers:{"content-Type":"application/json"}}
    return (
        axios.post(`/orders`,data,config)
        .then((res)=>{
            return res
        })
    )
})

let OrderData=createSlice({
    name:"Orders",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(OrdersSend.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(OrdersSend.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.error=''
        })
        builder.addCase(OrdersSend.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error=action.error.message
        })
    }
})

export default OrderData.reducer