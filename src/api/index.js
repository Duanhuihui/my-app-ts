import baseUrl from 'api/baseUrl'
import {gethtttp} from 'utils/http'


const api={
    getChengpin(){
        return gethtttp(baseUrl.baseUrl +baseUrl.chengpin)
    },
    getTest(){
        return gethtttp(baseUrl.test)
    },
}
 export default api;