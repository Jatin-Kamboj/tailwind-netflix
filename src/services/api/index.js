import axios from "axios";
import { responseErrorInterceptor } from "./intercesptors/response.interceptor";

export const $http = axios.create({
  baseURL: `https://imdb236.p.rapidapi.com`,
  headers: {
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
    "x-rapidapi-key": "4ed49f057bmsh21e3a53831c275ep15e2f3jsnb7879e9fd2f0",
  },
});

// HTTP response interceptor
$http.interceptors.response.use(null, responseErrorInterceptor);
