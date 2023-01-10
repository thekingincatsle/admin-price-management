import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosApps } from "react-icons/io";

const NavBar = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/login");
    localStorage.clear();
  }
  return (
    <div className="bg-slate-600 py-1 px-12 flex items-center justify-between">
      <Link to="/">
        <IoIosApps size={50} color="rgb(165,243,252)" />
      </Link>
      <div
        onClick={handleLogOut}
        className="cursor-pointer bg-cyan-500 p-2 rounded-md text-md"
      >
        Đăng xuất
      </div>
    </div>
  );
};

export default NavBar;
