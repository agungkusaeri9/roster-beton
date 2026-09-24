import axios from "axios";

function getBaseUrl() {
  if (typeof window === "undefined") {
    // Server-side (Node.js SSR): prioritas INTERNAL_API_URL untuk Docker network, atau NEXT_PUBLIC_API_URL
    return process.env.NEXT_PUBLIC_API_URL;
  }
  // Client-side (Browser)
  return process.env.NEXT_PUBLIC_API_URL;
}

export const apiClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  config.baseURL = getBaseUrl();
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Custom error formatting
    const message =
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat menghubungi server";
    return Promise.reject(new Error(message));
  },
);

export default apiClient;
