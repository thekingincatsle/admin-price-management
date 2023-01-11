import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import RegisterList from "../components/RegisterList";
import SuccessList from "../components/SuccessList";
import FormDetail from "./FormDetail";
import { Link } from "react-router-dom";

const Home = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin) {
    return (
      <div className="h-screen overflow-hidden">
        <NavBar />
        <div className="flex h-full">
          <div className="w-1/6">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-5/6 overflow-scroll">
            <Routes>
              <Route path="/*" element={<Landing />}></Route>
              <Route path="/register-list" element={<RegisterList />}></Route>
              <Route path="/success-form" element={<SuccessList />}></Route>
              <Route path="/form-detail/:id" element={<FormDetail />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full bg-cover flex flex-col gap-5 justify-center items-center text-3xl mt-10">
        <div>Vui lòng đăng nhập để tiếp tục</div>
        <Link to="/login">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quay về trang đăng nhập
          </button>
        </Link>
      </div>
    );
  }
};

export default Home;
