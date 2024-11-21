import axios from "axios";
import { store } from "../redux/store";

const axiosInstance = axios.create({
  baseURL: "https://animal-bazaar-server.vercel.app/api",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
