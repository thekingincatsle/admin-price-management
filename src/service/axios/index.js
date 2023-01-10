import axios from "axios";

const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  timeout: 1000,
  headers: { Accept: "application/json" },
});
export default AXIOS;
