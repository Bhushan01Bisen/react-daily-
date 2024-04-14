// import { useEffect, useState } from "react";

import { UseLocalStorage } from "../CustomHooks/UseLocalStorage";

// export const LocalStrorageExample = () => {
//   const [name, setName] = useState("");

//   const HandleChange = (e) => {
//     setName(e.target.value);
//     localStorage.setItem("name", e.target.value);
//   };

//   useEffect(() => {
//     const data = localStorage.getItem("name");
//     setName(data);
//   }, []);

//   const handleRemove = () => {
//     localStorage.removeItem("name");
//     setName("");
//   };
//   return (
//     <p>
//       <input onChange={HandleChange} value={name} />

//       <h1>{name}</h1>

//       <button onClick={handleRemove}>Clear LocalStorage Data </button>
//     </p>
//   );
// };
// export default LocalStrorageExample;

const LocalStorageExample = () => {
  const [name, updater, clear] =UseLocalStorage('name', '');

  const handleChange = (e) => {
    updater(e.target.value);
  };

  const handleClearData = () => {
    clear();
  };
  return (
    <p>
      <input onChange={handleChange} value={name} />
      <h1>{name}</h1>
      <button onClick={handleClearData}>Clear localStorage data</button>
    </p>
  );
};
export default LocalStorageExample;
