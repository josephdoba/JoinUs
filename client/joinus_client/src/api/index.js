import axios from "axios";

const baseURL = "http://localhost:8080/";

export const fetchEvent = (urlEnd) => {
  return axios.get(`${baseURL}${urlEnd}`);
};

export const fetchAPI = (urlEnd) => {
  return axios.get(`${baseURL}api/${urlEnd}`);
};
