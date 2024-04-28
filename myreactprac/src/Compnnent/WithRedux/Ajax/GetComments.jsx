import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const GetComments = () => {
  const comments = useSelector((state) => state?.ajax?.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    axios;
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((res) => console.log(res.data, "res"))
    //   .catch((res) => console.log(res));

    const getComments = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments" 
      );
      console.log(res.data);
      dispatch({
        type: "COMMENTS",
        payload: res.data,
      });
    };
    getComments();
  }, []);

  return (
    <div>
      {comments.map((obj, i) => {
        return <h1 key={i}>{obj.email}</h1>;
      })}
    </div>
  );
};
