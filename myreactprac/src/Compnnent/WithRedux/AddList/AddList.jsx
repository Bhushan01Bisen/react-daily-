// import { useRef, useState } from "react";

// export const AddList = () => {
//   const inputRef = useRef();

//   const [list, setList] = useState([]);

//   const handleClick = () => {
//     const inputData = inputRef.current.value;

//     setList([...list, inputData]);
//     inputRef.current.value = "";
//   };
//   console.log(list, "list");
//   return (
//     <p>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>List </button>
//       <div style={{display : 'flex ', justifyContent : 'space-around'}}>
//         {list.map((item, i) => {
//           return <h1 key={i}> {item}</h1>;
//         })}
//       </div>
//     </p>
//   );
// };

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddList = () => {
  const inputRef = useRef();
  const list = useSelector((state) => state.li.list);
  const dispatch = useDispatch();

  const handleClick = () => {
    const inputData = inputRef.current.value;

    dispatch({
      type: "LIST",
      paylode: inputData,
    });

    inputRef.current.value = "";
  };
  console.log(list, "list");
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>List </button>
      <div style={{ display: "flex ", justifyContent: "space-around" }}>
        {list.map((item, i) => {
          return <h1 key={i}> {item}</h1>;
        })}
      </div>
    </div>
  );
};
