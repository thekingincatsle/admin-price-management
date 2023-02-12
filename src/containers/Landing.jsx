import React from "react";

const Landing = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <div className="w-full h-full bg-cover flex flex-col items-center text-3xl mt-10 gap-5">
      <div>Xin chào admin {admin.tenCanBo}</div>
      <div>Email {admin.email}</div>
    </div>
  );
};

export default Landing;
