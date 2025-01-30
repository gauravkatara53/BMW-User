import axios from "axios";

// Base URL for API
const BASE_URL = "http://localhost:5001/api/v1";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor for adding authentication token
api.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken=")) // Updated to accessToken
      ?.split("=")[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Generic API request function
interface ApiService {
  get: <T>(url: string, params?: Record<string, any>) => Promise<T>;
  post: <T>(url: string, data: any) => Promise<T>;
  put: <T>(url: string, data: any) => Promise<T>;
  patch: <T>(url: string, data: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}

export const apiService: ApiService = {
  get: (url, params = {}) => api.get(url, { params }).then((res) => res.data),
  post: (url, data) => api.post(url, data).then((res) => res.data),
  put: (url, data) => api.put(url, data).then((res) => res.data),
  patch: (url, data) => api.patch(url, data).then((res) => res.data),
  delete: (url) => api.delete(url).then((res) => res.data),
};

export default api;
