import axios from "axios";

class ServiceCallService {
  static get(url) {
    return axios.get(url);
  }

  static post(){}
  static delete(){}
  static put(){}
}


export default ServiceCallService;