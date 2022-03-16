import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/property-info" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
