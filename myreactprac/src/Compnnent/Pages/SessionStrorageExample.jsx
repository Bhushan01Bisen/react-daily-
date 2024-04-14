//  import { UseLocalStorage } from "../CustomHooks/UseLocalStorage";

import { useEffect, useRef, useState } from "react";

// const SessionStrorageExample = () => {
//   const [user, store, clear] = UseLocalStorage("user", "");

//   const handleClick = (e) => {
//     store(e.target.value);
//   };

//   const handleremove = () => {
//     clear();
//   };

//   return (
//     <p>
//       <input onChange={handleClick} value={user} />
//       <h1>{user}</h1>
//       <button onClick={handleremove}>Clear & Show</button>
//     </p>
//   );
// };

// export default SessionStrorageExample;

const SessionStorageExample = () => {
  const [isColor, setIsColor] = useState(false);
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    const input = inputRef.current.value;
    setItems([...items, input]);
    inputRef.current.value = "";
    sessionStorage.setItem("items", JSON.stringify([...items, input]));
    inputRef.current.value = "";
  };

  const handleToggleColor = () => {
    setIsColor(!isColor);
  };


  useEffect(()=>{


    const itemdata=  sessionStorage.getItem("items");
    itemdata&& setItems(JSON.parse(itemdata))
     

  },[])

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Prarambh</button>
      <ul>
        {items?.map((item, index) => (
          <li
            onClick={handleToggleColor}
            key={index}
            style={{ color: isColor ? "red" : "" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionStorageExample;
