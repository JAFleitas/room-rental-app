import React from "react"

import { Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx"
import AboutUs from "../pages/about-us/AboutUs"
import Home from "../pages/home/Home.jsx"
import FormAddProperty from "../components/formAddProperty/form.jsx"
const RouterApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<PropertyCard />} /> */}
      <Route path="/property-info/:id" element={<Details />} />
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about-us" element={<AboutUs />}></Route>
      <Route exact path="/form" element={<FormAddProperty />}>
        {" "}
      </Route>
    </Routes>
  )
}

export default RouterApp
