import axios, { AxiosResponse } from "axios";
import { API_URL } from "../env";
import { EHTTPMethod} from "../model/Members";

class Api {
  private baseUrl = API_URL;

  private geMembersListApi(
    method: EHTTPMethod,
    endpoint: string
  ): Promise<AxiosResponse<any>> {
    console.log(this.baseUrl)
    return axios.request({
      method,
      url: `${this.baseUrl}${endpoint}`
    });
  }

  public getMembersLists() {
    const data =  this.geMembersListApi(EHTTPMethod.GET, "/");
    console.log(data)
    return data
  }

}

export default new Api();
