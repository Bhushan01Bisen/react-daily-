import axios from "axios";

 
export class ServerCallService   {
  
static get(url){
return axios.get(url)
}

static post(url,data){
  return  axios.post(url,data) //insertion and updation are hapnning
}

static delete(id){
   return axios.delete(id) //which columd your havw deleted
}

}

