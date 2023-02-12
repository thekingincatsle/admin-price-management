import AXIOS from "./axios";
const rootEndPoint = "api/family";

function getAllFamily() {
  return AXIOS.get(`${rootEndPoint}/get-all`);
}
function addFamily(family) {
  return AXIOS.post(`${rootEndPoint}/add`, family);
}
function deleteFamily(family) {
  return AXIOS.delete(`${rootEndPoint}/delete`, { data: family });
}
export { getAllFamily, addFamily, deleteFamily };
