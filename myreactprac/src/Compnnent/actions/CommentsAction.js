 import ServiceCallService from "../../ServiceCallService/ServiceCallService";

 
export const CommentsAction = async (d) => {
    const res = await ServiceCallService.get(
      "https://jsonplaceholder.typicode.com/comments" 
    );
    console.log(res.data);
    d({
      type: "COMMENTS",
      payload: res.data,
    });
  };