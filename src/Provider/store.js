import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import ProductSlice from "./ProductSlice";
import SingleProductSlice from "./SingleProductSlice";
import CategoryData from "./CategotySlice"
import UserData from "./UserSlice";
import LoginSlice from "./LoginSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
       Product:ProductSlice,
       singleProduct:SingleProductSlice,
       Category:CategoryData,
       Users:UserData,
       Login:LoginSlice,
       Cart:cartSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store
