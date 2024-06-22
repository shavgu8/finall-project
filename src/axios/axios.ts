        // http://localhost:3000/0
        // http://localhost:3000/1
        // http://localhost:3000/2
        // http://localhost:3000/3
        // http://localhost:3000/4
        // http://localhost:3000/5


import axios from "axios"

      
const baseUrl = 'http://localhost:3000'
const api = axios.create({
    baseURL:baseUrl,
    timeout:20 * 1000,
    timeoutErrorMessage:'request timed out'
})
 api.interceptors.request.use(async (req)=>{
    req.headers['Content-Type'] = 'aplication/json'
    req.headers['Accept'] = 'aplication/json'
    return req
 })
 export default api