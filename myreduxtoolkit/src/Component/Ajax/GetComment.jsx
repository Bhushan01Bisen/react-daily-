import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";
import { setComments } from "../../Reducers/ajaxSlice";

export const GetComments = () => {
  const dispatch= useDispatch(null)
  const [count, SetCount] = useState(0);
  const fetchComments = useCallback( async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );

      console.log(res);
  dispatch(setComments(res?.data))
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


