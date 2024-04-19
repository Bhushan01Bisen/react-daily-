import { forwardRef, useRef } from "react";

 
const ForwardRef1 = () => {
 const inputRef=useRef(null)
    const handleClick=()=>{
        inputRef.current.value="Sachin";
    }
  return (
    <p>

      <ChildComponent name="Socerus Stone" refrence={inputRef}/>
      <button onClick={handleClick}>You can search anything</button>
     

    </p>
  )
}

export default ForwardRef1

const ChildComponent =forwardRef((props,myRef ) => {
    return(


<p>
<h1>{props.name}</h1>
      <input ref={props.refrence}/>  
</p>
     
      
    )
})