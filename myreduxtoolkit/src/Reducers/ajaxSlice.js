import { createSlice } from "@reduxjs/toolkit";
import { ajaxSlice } from "../constant";


const ajax= createSlice({
    name:ajaxSlice,
    initialState:{
      
       
        comments:[],
        posts:[],
        users:[]

    },
    reducers:{
        setPosts:(state,action)=>{
            state.posts=action.payload
        },
        setComments:(state,action)=>{
            state.comments=action.payload
        },
        setUsers:(state,action)=>{
            state.users=action.payload
        }
    }
})
export const {setPosts,setComments,setUsers}= ajax.actions;

export default ajax.reducer;