import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLoc } from "../Reducers/nameLocSlice";

export const B = () => {
    const dispatch=useDispatch()

  const inploc = useRef(null);
  const handleClick = () => {
    const loc= inploc.current.value;
 dispatch(setLoc(loc))
    inploc.current.value = "";
  };

  return (
    <div>
      <input ref={inploc} />
      <button onClick={handleClick}>Location </button>
    </div>
  );
};
