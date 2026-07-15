import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 */
apiClient.interceptors.request.use(
  (config) => {
    // Initialize metadata object if it doesn't exist
    config.metadata = {
      startTime: Date.now(),
    };

    console.log(
      `🚀 ${config.method?.toUpperCase()} ${config.baseURL || ""}${config.url || ""}`
    );

    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    const duration =
      Date.now() - (response.config?.metadata?.startTime ?? Date.now());

    console.log(
      `✅ ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url || ""} (${duration} ms)`
    );

    return response;
  }, 
  (error) => {
    console.error("❌ API Error:", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;