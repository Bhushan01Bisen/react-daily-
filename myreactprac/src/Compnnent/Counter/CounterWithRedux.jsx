 
import { useDispatch, useSelector } from "react-redux"; //useSelector is a hook which takes call bacl as a argument ,complite sate having multipel reducer 

export const CounterWithRedux = () => {
const count= useSelector((state)=>state?.CounterReducer?.count)
  const dispatch=useDispatch() //its a hook
  const handleIncCount = () => {
    dispatch({type:'COUNT'})
  };
  return (
    <div>
      <button onClick={handleIncCount}>Inc Count...{count}</button>
    </div>
  );
};

