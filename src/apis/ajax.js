import axios from "axios";


//响应拦截器
axios.interceptors.response.use(
    function(response){
        return response.data.data
    }
)

export default  axios