import axios  from "axios"

const api = axios.create({
    baseURL : "https://mentoons-master-backend.onrender.com"
    
    
})

api.interceptors.request.use(

    function (config){
       
        return config;
    }

)
api.interceptors.request.use(

)
export default api;