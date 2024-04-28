 import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const GetPosts = () => {
  const posts= useSelector((state)=>state.ajax. posts)
const dispatch=useDispatch()
    const getPost= async ()=>{
        const res =await axios.get('https://jsonplaceholder.typicode.com/posts')
         dispatch({
            type:"POSTS",
            payload: res.data

         })

        return res;
    }
    useEffect(()=>{
        getPost()
    },[])
  return (
    <div>
  
  {posts?.map((obj, i) => {
  return <h1 key={i}>{obj.title}</h1>; // Added return statement
})}

    </div>
  )
}
