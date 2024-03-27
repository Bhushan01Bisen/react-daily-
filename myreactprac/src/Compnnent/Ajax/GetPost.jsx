import { useEffect } from "react";
import axios from "axios";

export const GetPost = () => {
  // useEffect(() => {
  //   axios // its gong to return a promise
  //     .get("https://jsonplaceholder.typicode.com/posts"); //have returening a promise
  // .then((res) => console.log(res.data))  //Earlier we were handing  2 then  because it was return a raw response
  // .catch((failure) => console.log(failure));

  // insted of using then and catch you can use async await (you can handle it )

  // }, []);
  const getPost = async () => {
  try{
    const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res)
  }
  catch(f){
    console.log(f)

  }
  };
  useEffect(() => {
    getPost()
  }, []);

  // you should not use for your async in useEffrct
  //if we use achour tag page is going to relode do we use link tag 
  return <div></div>;
};
