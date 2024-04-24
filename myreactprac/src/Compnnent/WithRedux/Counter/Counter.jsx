// import { useState } from "react"

import { useSelector ,useDispatch } from "react-redux";
import { decCount, inCount, resetCount } from "../../actions/CounterAction";

// export const Counter = () => {
//     const [count,setCount]=useState(0)

//   return (
//     <div>

// <button onClick={()=>setCount(count +1)}>Increment</button>
// <button onClick={()=>setCount(0)}>Reset</button>
// <button onClick={()=>setCount(count -1)}>Decrement</button>

// <h1>{count}</h1>

//     </div>
//   )
// }
 
export const Counter = () => {
    
    const count= useSelector((state)=>state.CounterReducer.myCount)
     const dispatch= useDispatch()

     const handleClick =()=>{
         dispatch( inCount(count +10))
        }
     const handleRes =()=>{
         dispatch( resetCount())
        }
   //   const handleDec =()=>{
   //       dispatch({
   //          type:"DEC",
   //          paylode:count -5
   //       })
     const handleDec =()=>{
         dispatch( decCount(count -5))
        }
  return (
    <div>
      <button onClick={ handleClick }>Increment</button>
      <button onClick={ handleRes  }>Reset</button>
      <button onClick={ handleDec }>Decrement</button>

      <h1>{count}</h1>
    </div>
  );
     }
