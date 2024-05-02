import ServiceCallService from "../../ServiceCallService/ServiceCallService";

const UserAction = async (d) => {
  const res = await ServiceCallService.get(
    "https://jsonplaceholder.typicode.com/users"
  ); //for making the code genric
  console.log(res.data);
  d({
    type: "USERS",
    payload: res.data,
  });
};
export default UserAction;
