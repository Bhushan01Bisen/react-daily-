
import { intatialLiist } from "../intialData/IntialData";

const listReducer = (state = intatialLiist, action) => {

    if (action.type==="LIST") {
state={ ...state,list:[...state.list,action.paylode]} // |action.payload| hear you have lode use array  || hear fist spred oprator will give you comple data || and the second spread oprator will give you previous data
    }
  return state;
};
export default listReducer;






//for your better uderstading 
// state=intitial,action:{type:"LIST",list:"Mango"}
