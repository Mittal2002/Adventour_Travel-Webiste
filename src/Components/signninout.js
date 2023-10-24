import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Login1 from "./Components/Login1";
export default function signninout() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login1" element={<Login1 />} />
      </Routes>
    </div>
  );
}
