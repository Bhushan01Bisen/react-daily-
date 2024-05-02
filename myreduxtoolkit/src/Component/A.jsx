import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../Reducers/nameLocSlice";

export const A = () => {
  const dispatch = useDispatch();
  const inpName = useRef(null);
  const handleClick = () => {
    const nam = inpName.current.value;
    dispatch(setName(nam));
    inpName.current.value = "";
  };

  return (
    <div>
      <input ref={inpName} />
      <button onClick={handleClick}>Name</button>
    </div>
  );
};
