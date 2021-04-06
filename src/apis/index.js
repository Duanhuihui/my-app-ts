
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
export function getAllInfo(){
    return ajax({
        method:'get',
        url:'/getAllInfo'
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
//上传
export function uploadfile(file){
    return ajax({
        headers:{
            'Content-Type': 'false'
        },
        method:'post',
        url:'/file/upload',
        data: file
    })
}
//上传
export function uploadfiles(files){
    return ajax({
        // headers:{
        //     'Content-Type': 'multipart/form-data'
        // },
        method:'post',
        url:'/file/uploadBatch',
        data: files
    })
}
//删除文件
export function deleteFile(fileName){
    return ajax({
        method:'get',
        url:'/file/delete/'+fileName,
    })
}
export function deleteFiles(fileNames){
    return ajax({
        method:'post',
        url:'/file/delete/',
        data:fileNames
    })
}