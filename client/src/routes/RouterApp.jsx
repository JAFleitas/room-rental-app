import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx"

const RouterApp = () => {
    

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;