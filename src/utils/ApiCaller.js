import axios from "axios";
import * as Config from './../constants/Config';

export default function callApi (endpoint, method ='GET',body) {
    return axios({
        method: method,
        url:  `${Config.API_URL}/${endpoint}`,
        data: body,
      }).catch(error => {
        console.log(error);
      })
}
// export default async function callApi (endpoint, method ='GET',body) {
//   try {
//   return axios({
//     method: method,
//     url: `${Config.API_URL}/${endpoint}`,
//     data: body,
//   });
// } catch (error) {
//   console.log(error);
// }
// }