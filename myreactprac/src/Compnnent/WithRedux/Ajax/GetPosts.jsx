//  import axios from 'axios'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ServiceCallService from "../../../ServiceCallService/ServiceCallService";
import { PostAction } from "../../actions/PostAction";

export const GetPosts = () => {
  const posts = useSelector((state) => state.ajax.posts);
  const dispatch = useDispatch();
 
  useEffect(() => {
     PostAction(dispatch)
  }, []);
  return (
    <div>
      {posts?.map((obj, i) => {
        return <h1 key={i}>{obj.title}</h1>; // Added return statement
      })}
    </div>
  );
};
