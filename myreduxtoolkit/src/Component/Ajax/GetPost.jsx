import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../Reducers/ajaxSlice";

export const GetPost = () => {
  const dispatch=useDispatch(null)
  const [count, setcount] = useState(0);

  const fetchPost = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
dispatch(setPosts(res?.data))
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Nikhil...{count}</button>
    </div>
  );
};
