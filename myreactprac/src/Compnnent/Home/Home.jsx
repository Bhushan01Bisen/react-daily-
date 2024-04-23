import { useSelector } from "react-redux";
// import MyComponent from "../Pages/ResponsivePage1";
import { useState } from "react";

// import './home.css';
export const Home = () => {
  // const count= useSelector((state)=>state?.CounterReducer?.count)
  const [isCounter,setCount]=useState(true);
  

  return (
    <div className='home'>
    {/* <h1> Inc Count{count}</h1>  */}
      {/* <MyComponent/> */}
      <button onClick={()=>setCount(!isCounter)}>IncoCount</button>
      {isCounter&& <Counter/>}
    </div>
  )
}

const Counter =()=>{

  const [LocalCount,setLocalCount]=useState(0)
  const globalCount= useSelector((state)=>state?.CounterReducer?.count)
  const { name, loc } = useSelector((state) => state.nL || {});
 return(
    <>
      <button onClick={ ()=>setLocalCount(LocalCount+1)}> IcCount</button>
      <h1>Local Count:{LocalCount}</h1>
      <h1>Global COunt:{globalCount}</h1>


      <h1>NAME:{name}</h1>
      <h2>LOCATION:{loc}</h2>

    </>
     )
     }
  
export default Home;