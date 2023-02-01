import AXIOS from "./axios";
const rootEndPoint = "api/family";

function getAllFamily() {
  return AXIOS.get(`${rootEndPoint}/get-all`);
}

export { getAllFamily };
