import axios from "axios";

const baseURL = "http://localhost:8080/api/";

export const fetchAPI = (urlEnd) => {
  return axios.get(`${baseURL}${urlEnd}`);
};

// https://stackabuse.com/how-to-make-put-http-request-with-axios/
export const addData = (urlEnd) => {
  return axios.post(`${baseURL}${urlEnd}`, {
    title: "Checking post requests",
    status: "published"
  });


};
