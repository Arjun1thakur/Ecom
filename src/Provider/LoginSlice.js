import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    product:[],
    error:''
}

export const LoginUser=createAsyncThunk('signin',(data)=>{
    let config={Headers:{"content-Type":"application/json"}}
    return (
        axios.post(`https://ecom-backend-9u2i.onrender.com/signin`,data,config)
        .then((res)=>{
            return res
        })
    )
})



let LoginSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        LogOutUser(state){
            state.product=[]
          }
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.error=''
        })
        builder.addCase(LoginUser.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error=action.error.message
        })
    }
})

export default LoginSlice.reducer
export const {LogOutUser} = LoginSlice.actions
