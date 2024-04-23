import { useRef } from "react";

export const A = ({fn}) => {
     const namRef=useRef(null)
    const handleName=()=>{
        const name = namRef.current.value
        fn(name)
    }
  return (
    <div>
      <input ref={namRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
