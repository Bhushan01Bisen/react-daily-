import axios from "axios";
import { useEffect } from "react";
 
export const GetPost = () => {
  const GetReasult = async () => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(res)
    }
    catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    GetReasult()
  }, []);
  return <div>GetPost</div>;
};
