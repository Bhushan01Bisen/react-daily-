import { useRef } from "react";

export const B = ({rn}) => {
    const locRef=useRef(null)

    const handlelocation=()=>{
        const loc=locRef.current.value
        rn(loc)
    }
  return (
    <div>
      <input ref={locRef} />
      <button  onClick={handlelocation}>Location</button>
    </div>
  );
};
