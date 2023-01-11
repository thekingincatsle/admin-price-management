import React from "react";

const Landing = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <div className="w-full h-full bg-cover flex justify-center text-3xl mt-10">
      <div>Xin chào admin {admin.ten}</div>
      <div>Email {admin.email}</div>
    </div>
  );
};

export default Landing;
