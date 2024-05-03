import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const GetPost = () => {
  const [count, setcount] = useState(0);

  const fetchPost = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

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
