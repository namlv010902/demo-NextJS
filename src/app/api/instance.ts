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

})
console.log(process);

instance.interceptors.request.use((config) => {
    config.headers['X-Request-Timestamp'] = new Date().toISOString();
    return config;
});
export { instance }