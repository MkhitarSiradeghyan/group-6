import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable";
import ElementPage from "./pages/ElementPage/ElementPage";
import Layout from "./layouts/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/periodic-table" element={<PeriodicTable />} />
          <Route path="/element/:number" element={<ElementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
