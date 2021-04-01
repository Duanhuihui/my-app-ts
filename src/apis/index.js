
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

//新建课程
export function submitCourse(value){
    return ajax({
        headers:{
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:'post',
        url:'/submitCourse',
        data: JSON.stringify(value)
    })
}
//上传图片
export function uploadImg(file){
    return ajax({
        headers:{
            'Content-Type': 'false'
        },
        method:'post',
        url:'/uploadImg',
        data: file
    })
}