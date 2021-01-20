import qs from 'querystring'

export function gethtttp(url){
    const result = fetch(url);
    return result;
}

export function posthtttp(url,params){
    const result = fetch(url,
        {
            method:"POST",
            headers:{
                'Content-Type':'application/x-www-form-urlencode',
                'Accept':'application/json,text/plain,*/*'
            },
            /**
             * 
             * 
             */
            body:qs.stringify(params)
        });
    return result;
}