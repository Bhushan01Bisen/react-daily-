import ServiceCallService from "../../ServiceCallService/ServiceCallService";

  
 export const PostAction =  async (d) => {
    const res = await ServiceCallService.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); //for making the code genric
    d({
      type: "POSTS",
      payload: res.data,
    });

    return res;
  };
 