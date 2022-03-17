import React from "react"

import { Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx"
import AboutUs from "../pages/about-us/AboutUs"

const RouterApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<PropertyCard />} /> */}
      <Route path="/property-info" element={<Details />} />
      <Route exact path="/" element={<div>Home</div>}></Route>
      <Route exact path="/about-us" element={<AboutUs />}></Route>
    </Routes>
  )
}

export default RouterApp
