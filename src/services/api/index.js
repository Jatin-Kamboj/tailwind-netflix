import axios from "axios";
import { responseErrorInterceptor } from "./intercesptors/response.interceptor";

export const $http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Default params
  params: {
    apikey: import.meta.env.VITE_API_KEY,
  },
});

// HTTP response interceptor
$http.interceptors.response.use(null, responseErrorInterceptor);
