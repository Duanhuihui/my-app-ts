
import ajax from './ajax'

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