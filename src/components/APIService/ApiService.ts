import axios from "axios";

const Base = import.meta.env.VITE_BASE_URL;
console.log("base", Base);
// Base URL for API
const BASE_URL = Base;
//https://bmw-backend-l85a.onrender.com/api/v1/

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure cookies are sent with every request
});

// Add interceptor for adding authentication token
api.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    console.log("Access Token from Cookies:", token); // 🔍 Debugging

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("⚠️ No token found in cookies!");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Generic API request function
interface ApiService {
  get: <T>(url: string, params?: Record<string, any>) => Promise<T>;
  post: <T>(url: string, data: any, config?: any) => Promise<T>; // ✅ Allow extra config
  put: <T>(url: string, data: any) => Promise<T>;
  patch: <T>(url: string, data: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}

export const apiService: ApiService = {
  get: (url, params = {}) => api.get(url, { params }).then((res) => res.data),
  post: (url, data, config = {}) =>
    api.post(url, data, config).then((res) => res.data), // ✅ Accept config
  put: (url, data) => api.put(url, data).then((res) => res.data),
  patch: (url, data) => api.patch(url, data).then((res) => res.data),
  delete: (url) => api.delete(url).then((res) => res.data),
};

export default api;
