import { intaialCounter } from "../intialData/IntialData";

const CounterReducer = (state = intaialCounter, action) => {
  if (action.type === "COUNT") {
    state = { ...state, count: state.count + 1 };
  }

  if (action.type === "INC") {
    state = { ...state, myCount: state.myCount + 10 };
  }
  if (action.type === "RES") {
    state = { ...state, myCount: 0   };
  }
  if (action.type === "DEC") {
    state = { ...state, myCount: state.myCount -5 };
  }

  // console.log(state, "redux");
  return state;
  //for clear code icreated diffrent file
};

export default CounterReducer;
//one's when you can get the cover
// ={
//   type:"COUNT",

// }
