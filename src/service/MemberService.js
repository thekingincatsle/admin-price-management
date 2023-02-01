import AXIOS from "./axios";
const rootEndPoint = "api/member";

function getChildren() {
  return AXIOS.get(`${rootEndPoint}/get-children`);
}

function getMembersByIdShk(idShk) {
  return AXIOS.get(`${rootEndPoint}/get-by-id-shk?id_shk=${idShk}`);
}

export { getChildren, getMembersByIdShk };
