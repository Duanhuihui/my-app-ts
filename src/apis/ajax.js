import axios from "axios";
import qs from  'qs'
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么，例如加入token
//     //拦截POST请求
//     const {method,data} = config
//     if(method.toLocaleLowerCase === "post" && typeof(data) === 'object'){
//         config.headers={
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//         config.data = qs.stringify(data)
//     }
//     return config;
//   });
//响应拦截器
axios.interceptors.response.use(
    function(response){
        return response.data.data
    }
)

export default  axios