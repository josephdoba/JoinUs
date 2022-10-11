import axios from "axios";

const baseURL = "http://localhost:8080/api/";

export const fetchAPI = (urlEnd) => {
  return axios.get(`${baseURL}${urlEnd}`);
};

// https://stackabuse.com/how-to-make-put-http-request-with-axios/
export const postData = (urlEnd, data) => {
  return axios.post(`${baseURL}${urlEnd}`, data);
};
