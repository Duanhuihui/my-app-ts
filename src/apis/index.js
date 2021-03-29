
import ajax from './ajax'
import qs from 'qs'

// const baseUrl = 'http://localhost:9999'
const baseUrl =""
export function test(){
    return ajax({
        method:'get',
        url:baseUrl+'/111',

    })
}
export function getInfo(){
    return ajax({
        method:'get',
        url:'/getInfo'
    })
}
export function getInfoById(id,name){
    return ajax({
        headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
        },
        method:'post',
        url:'/getInfoById',
        data: qs.stringify({id,name})

    })
}