import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar.jsx"

const RouterApp = () => {
    

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;