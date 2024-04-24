import { useRef } from "react";
import { useDispatch } from "react-redux";

export const ARedux = () => {
    const dispatch=useDispatch ()
  const namRef = useRef(null);


  const handleName = () => {
    const name = namRef.current.value;

   dispatch({
    type:'NAME',
    payload:name
   })
  };
  return (
    <div>
      <input ref={namRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
