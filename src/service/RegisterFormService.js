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
export { getAllRegisterForm, getFormById, updateForm, getAcceptedForm };
