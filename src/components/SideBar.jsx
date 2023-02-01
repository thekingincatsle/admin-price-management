import React from "react";
import {
  IoMdHome,
  IoMdLogOut,
  IoMdPeople,
  IoIosBody,
  IoIosJournal,
  IoIosFiling,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-400 h-full flex flex-col items-center py-8 ">
      <Link
        to="/"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoMdHome size={25} className="mr-8" />
        <div className="text-md">Trang chủ</div>
      </Link>
      <Link
        to="/family"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoIosFiling size={25} className="mr-8" />
        <div className="text-md">Danh sách hộ khẩu</div>
      </Link>
      <Link
        to="/register-list"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoMdPeople size={25} className="mr-8" />
        <div className="text-md">Danh sách đăng kí</div>
      </Link>
      <Link
        to="/success-form"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoIosJournal size={35} className="mr-8" />
        <div className="text-md">Danh sách nhận thưởng HSG</div>
      </Link>
      <Link
        to="/children"
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
      >
        <IoIosBody size={25} className="mr-8" />
        <div className="text-md">Danh sách thiếu nhi</div>
      </Link>
      <div
        className="flex items-center w-full py-3 px-8 cursor-pointer hover:bg-cyan-500 duration-200"
        onClick={() => {
          navigate("/login");
          localStorage.clear();
        }}
      >
        <IoMdLogOut size={25} className="mr-8" />
        <div className="text-md">Đăng xuất</div>
      </div>
    </div>
  );
};

export default SideBar;
