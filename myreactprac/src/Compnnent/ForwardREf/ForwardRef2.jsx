import { forwardRef, useRef } from "react";

const ForwardRef2 = () => {
  const namRaf = useRef(null);
  const locRef = useRef(null);

  const handleClickNam = () => {
    namRaf.current.value = "sachin";
  };
  const handleClickLoc = () => {
    locRef.current.value = "Mumbai";
  };
  return (
    <div>
      <ChildComponent ref={[namRaf, locRef]} />

      <button onClick={handleClickNam}>CLICK THE NAME</button>
      <button onClick={handleClickLoc}>CLICK THE Location</button>
    </div>
  );
};

export default ForwardRef2;

const ChildComponent = forwardRef((prop, refrance) => {
  return (
    <>
      <input placeholder="name" ref={refrance[0]} />
      <input placeholder="loc" ref={refrance[1]} />
    </>
  );
});
