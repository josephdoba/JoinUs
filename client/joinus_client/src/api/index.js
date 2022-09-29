import axios from "axios";

const baseURL = "http://localhost:8080/api/";

export const fetchAPI = (urlEnd) => {
  return axios.get(`${baseURL}${urlEnd}`);
};
