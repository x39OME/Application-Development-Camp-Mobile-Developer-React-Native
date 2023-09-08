import axios from "axios";
import store from "../../store/store";
import { changeLoad } from "../../store/actions/loadActions.js";

const axiosNewsInstance=axios.create({
    baseURL:"https://newsapi.org/v2/",
    params:{
        apiKey:'693ac1fcd989492ea5a1a20828721875'
    }
});
axiosNewsInstance.interceptors.request.use(
    (req)=>{
        console.log("request interceptors")
        store.dispatch(changeLoad(true))
        return req
    },
    (error)=>{
        return Promise.reject(error)
    },
)

axiosNewsInstance.interceptors.response.use(
    (res)=>{
        console.log("res interceptors")
        store.dispatch(changeLoad(false))
        return res
    },
    (error)=>{
        return Promise.reject(error)
    },
)
export default axiosNewsInstance;