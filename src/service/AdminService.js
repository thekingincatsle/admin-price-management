import AXIOS from "./axios";
const rootEndPoint = "api/admin";

function LoginForStaff(payload) {
  return AXIOS.post(`${rootEndPoint}/login`, payload);
}

export { LoginForStaff };
