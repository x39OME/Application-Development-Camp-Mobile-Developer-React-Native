import axiosNewsInstance from "../../network/axiosConfig/axiosNews"


export default function articlesAction(){
    return (dispatch)=>{
axiosNewsInstance.get("/everything",{
    params:{
            q:"football"
    }
}).then((res)=>{
    console.log(res)
    dispatch({type:"SET_ARTICLES",payload:res.data.articles})
}).catch((error)=>{
    console.log(error)
})
    }
}