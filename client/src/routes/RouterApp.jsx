import React from "react"

import { Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import AboutUs from "../pages/about-us/AboutUs"
import Home from "../pages/home/Home.jsx"

import FormAddProperty from "../components/formAddProperty/form.jsx"

// import Form from "../components/Form/Form.jsx"
import Profile from "../pages/profile/profile.jsx"
import Error404 from "../pages/404/Error404.jsx"
import SignUp from "../components/DropDown/SignUp.jsx"
import Login from "../components/DropDown/Login.jsx"
import Favorites from "../pages/favorites/Favorites"

const RouterApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<PropertyCard />} /> */}
      <Route path="/property-info/:id" element={<Details />} />
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about-us" element={<AboutUs />}></Route>
      <Route exact path="/form" element={<FormAddProperty />} />
      <Route exact path="/logIn" element={<Login />}></Route>
      <Route exact path="/signUp" element={<SignUp />}></Route>
      <Route exact path="/profile/*" element={<Profile />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
      {/* <Route exact path="favorites" element={<Favorites />}></Route> */}
    </Routes>
  )
}

export default RouterApp
