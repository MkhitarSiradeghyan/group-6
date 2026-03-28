import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/periodic-table" element={<PeriodicTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
