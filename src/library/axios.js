import _axios from "axios";

const axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
})

axios.interceptors.request.use(async (config) => {

    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "*";
    config.headers["Content-Type"] = "application/json";

    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
    return response
}, err => {
    if (err.reponse?.status.code == 401) {
        // Unauthorize
        return Promise.reject(err)
    }

    return Promise.reject(err);
})

export default axios