import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const GetComments = () => {
  const [count, SetCount] = useState(0);
  const fetchComments = useCallback( async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  return (
    <div>
        GetComments
      <button onClick={() => SetCount(count + 1)}>in...Count{count}</button>
    </div>
  );
};


