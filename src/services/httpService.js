import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosConfig.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

axiosConfig.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      try {
        originalConfig._retry = true;
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`,
          {
            withCredentials: true,
          }
        );
        if (data) return axiosConfig(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: axiosConfig.get,
  post: axiosConfig.post,
  put: axiosConfig.put,
  delete: axiosConfig.delete,
};

export default http;
