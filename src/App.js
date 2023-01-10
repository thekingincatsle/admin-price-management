import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
