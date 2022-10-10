import axios from "axios";

const baseAPIURL = "http://localhost:8080/api/";

const baseURL = "http://localhost:8080/";

export const fetchAPI = (urlEnd) => {
  return axios.get(`${baseAPIURL}${urlEnd}`);
};

// https://stackabuse.com/how-to-make-put-http-request-with-axios/
export const postData = (urlEnd, data) => {
  return axios.post(`${baseURL}${urlEnd}`, data);
};
