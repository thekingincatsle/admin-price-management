import AXIOS from "./axios";
const rootEndPoint = "api/register-form";

function getAllRegisterForm() {
  return AXIOS.get(`${rootEndPoint}/get-all`);
}

function getFormById(id) {
  return AXIOS.get(`${rootEndPoint}/get-by-id?id=${id}`);
}

function updateForm(data) {
  return AXIOS.put(`${rootEndPoint}/update`, data);
}

function getAcceptedForm() {
  return AXIOS.get(`${rootEndPoint}/get-accepted-form`);
}

function getSortedRegisterForm(sortField, sort) {
  return AXIOS.get(
    `${rootEndPoint}/sorting?sortField=${sortField}&sort=${sort}`
  );
}

function getSortedAcceptedRegisterForm(sortField, sort) {
  return AXIOS.get(
    `${rootEndPoint}/sorting-accepted?sortField=${sortField}&sort=${sort}`
  );
}

function getByName(name) {
  return AXIOS.get(`${rootEndPoint}/get-by-name?name=${name}`);
}
function getByFamilyId(familyId) {
  return AXIOS.get(`${rootEndPoint}/get-by-id-shk?id_shk=${familyId}`);
}
function getByStatus(status) {
  return AXIOS.get(`${rootEndPoint}/get-by-status?status=${status}`);
}
function getByAge(age) {
  return AXIOS.get(`${rootEndPoint}/get-by-age?age=${age}`);
}

function getAcceptedByName(name) {
  return AXIOS.get(`${rootEndPoint}/get-accepted-form-by-name?name=${name}`);
}
function getAcceptedByFamilyId(familyId) {
  return AXIOS.get(
    `${rootEndPoint}/get-accepted-form-by-id-shk?id_shk=${familyId}`
  );
}
function getAcceptedByAdmin(adminName) {
  return AXIOS.get(
    `${rootEndPoint}/get-accepted-form-by-admin?name=${adminName}`
  );
}
function getAcceptedByTitle(title) {
  return AXIOS.get(`${rootEndPoint}/get-accepted-form-by-title?name=${title}`);
}
function getAcceptedByAge(age) {
  return AXIOS.get(`${rootEndPoint}/get-accepted-form-by-age?name=${age}`);
}


export {
  getAllRegisterForm,
  getFormById,
  updateForm,
  getAcceptedForm,
  getSortedRegisterForm,
  getByName,
  getByAge,
  getByFamilyId,
  getByStatus,
  getAcceptedByName,
  getAcceptedByAdmin,
  getAcceptedByTitle,
  getAcceptedByFamilyId,
  getSortedAcceptedRegisterForm,
  getAcceptedByAge,
};
