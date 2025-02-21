import axios from "axios";

// Base URL for API
const BASE_URL = "/api/v1/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure cookies are sent with every request
});

// 🚀 Log request details
api.interceptors.request.use(
  (config) => {
    console.log("🔄 Making request to:", config.url);
    console.log("📝 Request headers:", config.headers);
    console.log("🍪 Cookies being sent:", document.cookie);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// 📥 Log response details
api.interceptors.response.use(
  (response) => {
    console.log("✅ Response received from:", response.config.url);
    console.log("📦 Response data:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("❌ Response error from:", error.response.config?.url);
      console.error("⚙️ Status:", error.response.status);
      console.error("📄 Error message:", error.response.data?.message);
    } else {
      console.error("🚫 Network or CORS issue:", error.message);
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  get: (url: string, params = {}) =>
    api.get(url, { params }).then((res) => res.data),
  post: (url: string, data: any, config = {}) =>
    api.post(url, data, config).then((res) => res.data),
  put: (url: string, data: any) => api.put(url, data).then((res) => res.data),
  patch: (url: string, data: any, config = {}) =>
    api.patch(url, data, config).then((res) => res.data),
  delete: (url: string) => api.delete(url).then((res) => res.data),
};

export default api;
