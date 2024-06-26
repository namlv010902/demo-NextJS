import axios from "axios";
import Cookies from 'js-cookie';
import dotenv from "dotenv"
import { redirect } from "next/navigation";

dotenv.config();
const API_URL = process.env.API_URL || "http://localhost:5000/api/"
const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
    },
    withCredentials: true
});


async function refreshToken() {
    try {
        const response = await instance.post("auth/refreshToken");
        const accessToken = response.data.accessToken;
        console.log("Refreshed accessToken:", accessToken);
    } catch (error: any) {
        if (error.response.data.message == "Refresh token has expired") { //TODO: Refresh token hết hạn -> yêu cầu login lại
            redirect("/auth/login")
        }
        console.error("Error refreshing token:", error);
    }
}

instance.interceptors.request.use((config) => {
    config.headers['X-Request-Timestamp'] = new Date().toISOString();

    return config;
});

instance.interceptors.response.use((res) => {
    return res;
}, async (error) => {

    const originalRequest = error.config;
    if (error.response?.data?.message == "Token expired" && !originalRequest._retry) {
        originalRequest._retry = true;
        await refreshToken()
        return instance(originalRequest);
    }
    if (error.response?.data?.message == "No token provided") {
        console.log(error.response?.data?.message);
        redirect("/auth/login")
    }
    return Promise.reject(error);
})
export { instance };
