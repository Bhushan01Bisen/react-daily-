import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserAction from "../../actions/UsersAction";
export const GetUser = () => {
  const users = useSelector((state) => state.ajax.users);
  const dispatch = useDispatch();

  useEffect(() => {
    UserAction(dispatch);
  }, []);
  return (
    <div>
      {users?.map((obj, i) => {
        return <h1 key={i}>{obj.name}</h1>;
      })}
    </div>
  );
};
