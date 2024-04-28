//store is only one
import { configureStore, combineReducers, Tuple } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterRed"; //responsible for update your data
import NamLocRed from "../Reducers/nameLocationRed";
import listReducer from "../Reducers/listReducer";
import ajaxRed from "../Reducers/ajaxRed";

import logger from "redux-logger" //its a thired party library 

const rootReducer = combineReducers({
  CounterReducer, //key value same so that we write
  //hear i'm taking key with have diff name and value with diff name
  nL: NamLocRed,
  li: listReducer,
ajax: ajaxRed,
  
});

const store = configureStore({
  reducer: rootReducer,
  middleware:()=>new Tuple (logger)
});

export default store;

//main aplication
