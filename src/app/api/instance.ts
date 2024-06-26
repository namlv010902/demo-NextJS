import axios from "axios";
import Cookies from 'js-cookie';
import dotenv from "dotenv"

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

let accessToken: null = null; 

async function refreshToken() {
    try {
        const response = await instance.post("auth/refreshToken");
        accessToken = response.data.accessToken; // Lưu lại accessToken mới
        console.log("Refreshed accessToken:", accessToken);
        // Lưu accessToken vào cookie hoặc bộ nhớ nếu cần thiết
    } catch (error) {
        console.error("Error refreshing token:", error);
    }
}

instance.interceptors.request.use((config) => {
    config.headers['X-Request-Timestamp'] = new Date().toISOString();
    // if (!accessToken) {
    //     // Nếu không có accessToken, gọi refreshToken để lấy accessToken mới
    //     refreshToken();
    // } else {
    //     config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    return config;
});

export { instance ,refreshToken };
