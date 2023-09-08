export function changeLang(data){
    return {
        type:"SET_LANG",
        payload:data
    }
}

export function changeLoad(data)
{
    return{
        type:"SET_LOAD",
        payload:data
    }
}