import { useRef, useState } from "react";

const SessionStororageExAdd = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  const handleclick = () => {
    const inputvalue = inputRef?.current?.value;
    if (inputvalue === "") {
      alert("Please enter a value");
      return;
    }
    for (const item of data) {
      if (item?.value?.toLowerCase() === inputvalue?.toLowerCase()) {
        alert("alrady it's added");
        inputRef.current.value = "";
        return;
      }
    }
    setData([...data, { value: inputvalue, isColor: false }]);
    inputRef.current.value = ''; //hear is for empty sting for clear the name inside the input
  };

  const handleListColor = (i) => {
        setData((preState) => {
    const newArr = [...preState];
         newArr[i] = {
          ...newArr[i],
           isColor: !newArr[i].isColor
         };
        return newArr;
        });
      };

  return (
    <p>
      <input ref={inputRef} />
      <button onClick={handleclick}>Ptatishtha</button>
      <ul>
        {data?.map((dataObj, index) => {
          return <li style={{color: dataObj.isColor?'red':'blue'}} onClick={()=>{handleListColor(index)}}  key={index} >{dataObj?.value}</li>;
        })}
      </ul>
    </p>
  );
};

export default SessionStororageExAdd;
