import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "devepolment"?  "http://localhost:5001/api": "/api",
    withCredentials: true // for sending the cookies in the every single requested
})