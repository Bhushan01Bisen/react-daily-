import { useState } from "react";
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import { CounterWithLocalState } from "../Counter/CounterWithLocalState";
 
export const WithoutRedux2 = () => {
  const [name,setName]=useState('')
  const[loc,setLocation]=useState("")
  const getName=(data)=>{
   setName(data
  )
  }
  const getLocation=(data)=>{
    setLocation(data)

  }
  return (
    <div>
      <A fn={getName }/>
      <B rn={getLocation}/>
      <C name={name} loc={loc}/>
      <h1>Counter</h1>
      <CounterWithLocalState/>
     
    </div>
  );
};
