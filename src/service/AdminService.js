import AXIOS from "./axios";
const rootEndPoint = "api/staff";

function LoginForStaff(payload) {
  return AXIOS.post(`${rootEndPoint}/login`, payload);
}

export { LoginForStaff };
