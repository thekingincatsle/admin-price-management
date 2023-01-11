import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForStaff } from "../service/AdminService";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();
  async function handleLogIn() {
    if (passWord && email) {
      const response = await LoginForStaff({
        email,
        password: passWord,
      });
      const res = response.data;
      if (!res.validated) {
        alert(res.message);
      } else {
        localStorage.setItem("admin", JSON.stringify(res.canBoModel));
        navigate("/");
        alert(res.message);
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin đăng nhập");
    }
  }
  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen flex justify-center">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://media.istockphoto.com/id/1349688040/vector/hand-book-logo-design-education-logo-with-hand-concept-vector-hand-and-book-logo-design.jpg?s=612x612&w=0&k=20&c=kp2ZWkFL4U4-wtzZeL68OWvxJ25erp4RO-mJjFdZV64="
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Quản lý phần thưởng
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Vui lòng đăng nhập để tiếp tục</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Mật khẩu"
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background: `linear-gradient(
                            to right,
                            #373b44, #4286f4
                          )`,
                            }}
                            onClick={handleLogIn}
                          >
                            Đăng nhập
                          </button>
                          {/* <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a> */}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background: `linear-gradient(to right,#373b44, #4286f4)`,
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
