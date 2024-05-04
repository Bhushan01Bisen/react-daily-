import axios from "axios";
import { useEffect } from "react";
import { UseAction } from "../../actions/UseAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const GetUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.ajax?.users);
  useEffect(() => {
    UseAction(dispatch);
  }, []);
  return <div>
    {user?.map((obj,i) => {
return(
<h1 key={i}>{obj.email}</h1>
)
  })}</div>;
};
