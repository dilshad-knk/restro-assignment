import axios from "axios";


const instance = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "http://localhost:5000/api/v1",
withCredentials: true,
});

export default instance;