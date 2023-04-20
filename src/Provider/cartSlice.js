import { createSlice } from "@reduxjs/toolkit";



let CartData=createSlice({
    name:"product",
    initialState:[],
    reducers:{
        productAdd(state, action){
          state.push(action.payload)
        },
        productDeleted(state, action){
            state=state.filter(({_id}) => _id !== action.payload)
        }
      }
    })

export default CartData.reducer
export const {productAdd,productDeleted} = CartData.actions