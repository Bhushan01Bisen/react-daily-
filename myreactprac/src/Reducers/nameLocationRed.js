import { intaialCounter } from "../intialData/IntialData";

const NamLocRed = (state = intaialCounter, action) => {
  if (action.type === "NAME") state = { ...state, name: action.payload };
  if (action.type === "LOC") state = { ...state, loc: action.data };
  return state;
};

export default NamLocRed;
