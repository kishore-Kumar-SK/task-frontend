import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Pages from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<Pages />} />
    </Routes>
  );
}

export default App;
