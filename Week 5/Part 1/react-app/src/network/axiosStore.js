import axios from "axios";



const axiosStore=axios.create({
    baseURL:"https://fakestoreapi.com/"
})


export default axiosStore;