import { intatialAjax } from "../intialData/IntialData";

const ajaxRed = (state = intatialAjax, action) => {
  switch (action.type) {
    case "POSTS":
      console.log(action.payload, "action payload");
      return {
        ...state,
        posts: action.payload,
      };
    case "COMMENTS":
      // console.log(action.payload, "action payload");
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default ajaxRed;

// import { intatialAjax } from "../intialData/IntialData";

// const ajaxRed = (state = intatialAjax, action) => {
//    if(action.type==='POSTS'){
//   return (state={...state,posts:action.payload})
//    }
//    return state
// };

// export default ajaxRed;
