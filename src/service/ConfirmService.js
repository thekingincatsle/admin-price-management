import AXIOS from "./axios";
const rootEndPoint = "api/accountant";

function confirmPrice() {
  return AXIOS.post(`${rootEndPoint}/confirm-student-form`, {
    confirm: true,
    year: 2022,
    keToan: {
      email: "manhdeptrai@gmail.com",
    },
  });
}

export { confirmPrice };
