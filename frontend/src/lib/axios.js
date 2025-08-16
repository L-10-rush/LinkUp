import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"?  "http://localhost:5001/api": "/api",
    withCredentials: true // for sending the cookies in the every single requested
})

// frontend/src/lib/axios.js

// import axios from "axios";

// // This line automatically handles both development and production
// const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// export const axiosInstance = axios.create({
// 	baseURL: API_URL,
// 	withCredentials: true,
// });