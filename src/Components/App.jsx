import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin2 from "../Pages/Admin2";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pages from "../Pages/Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/admin2" element={<Admin2 />} />
    </Routes>
  );
}

export default App;
