 
 import { configureStore,combineReducers, Tuple } from "@reduxjs/toolkit";
import nameLocSlice from "../Reducers/nameLocSlice";
import logger from "redux-logger";
import ajaxRed from "../Reducers/ajaxSlice";
   

 const rootRed=combineReducers({
    nameLoc: nameLocSlice,
    ajax:ajaxRed
 
 })

 const store=configureStore({
    reducer:rootRed, 
    middleware: ()=>new Tuple (logger)
 })

 export default store;