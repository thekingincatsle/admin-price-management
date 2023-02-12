import AXIOS from "./axios";
const rootEndPoint = "api/member";

function getChildren() {
  return AXIOS.get(`${rootEndPoint}/get-children`);
}

function getMembersByIdShk(idShk) {
  return AXIOS.get(`${rootEndPoint}/get-by-id-shk?id_shk=${idShk}`);
}
function addMember(member) {
  return AXIOS.post(`${rootEndPoint}/add`, member);
}

function deleteMember(member) {
  return AXIOS.delete(`${rootEndPoint}/delete`, {
    data: member,
  });
}

export { getChildren, getMembersByIdShk, addMember, deleteMember };
