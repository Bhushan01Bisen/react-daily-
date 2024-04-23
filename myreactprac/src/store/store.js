//store is only one 
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterRed"; //responsible for update your data
import NamLocRed from "../Reducers/nameLocationRed";

const rootReducer=combineReducers ({
    CounterReducer ,//key value same so that we write
    //hear i'm taking key with have diff name and value with diff name 
    nL: NamLocRed
})

const store = configureStore({
    reducer:rootReducer

});

export default store;

 
//main aplication