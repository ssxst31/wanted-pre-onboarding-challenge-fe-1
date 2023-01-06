import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:8080",
});

const _getHeader = () => {
  return {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
};

export const post = (url: string, data: any, options?: any) => {
  const header = _getHeader();
  return axios.post(url, data, { ...options, ...header });
};
