import { setUsers } from "../Reducers/ajaxSlice";
import { ServerCallService } from "../ServerCallService";
 

export const UseAction = (dispatch) => {
    
  ServerCallService.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => dispatch(setUsers(res.data)) )
    .catch((res) => console.log(res, "res"));
};
