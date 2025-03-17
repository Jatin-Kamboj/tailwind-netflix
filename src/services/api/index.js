import axios from "axios";
import { responseErrorInterceptor } from "./intercesptors/response.interceptor";

export const $http = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

// HTTP response interceptor
$http.interceptors.response.use(null, responseErrorInterceptor);
