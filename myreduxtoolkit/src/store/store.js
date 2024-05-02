 
 import { configureStore,combineReducers, Tuple } from "@reduxjs/toolkit";
import nameLocSlice from "../Reducers/nameLocSlice";
import logger from "redux-logger";


 const rootRed=combineReducers({
    nameLoc: nameLocSlice
 })

 const store=configureStore({
    reducer:rootRed, 
    middleware: ()=>new Tuple (logger)
 })

 export default store;