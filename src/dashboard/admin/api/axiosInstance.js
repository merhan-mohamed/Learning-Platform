import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://edu-master-psi.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 inject token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;