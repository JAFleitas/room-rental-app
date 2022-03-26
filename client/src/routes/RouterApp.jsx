import React from "react"
import { Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import AboutUs from "../pages/about-us/AboutUs"
import Home from "../pages/home/Home.jsx"
import Profile from "../pages/profile/profile.jsx"
import Error404 from "../pages/404/Error404.jsx"
import SignUp from "../components/DropDown/SignUp.jsx"
import Login from "../components/DropDown/Login.jsx"
import FormPaymentMethod from "../pages/profile/Components/FormPaymentMethod/FormPaymentMethod.jsx"
import Forgotpassword from "../pages/ForgotPassword/ForgotPassword.jsx"

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/property-info/:id" element={<Details />} />
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about-us" element={<AboutUs />}></Route>
      <Route exact path="/logIn" element={<Login />}></Route>
      <Route exact path="/signUp" element={<SignUp/>}></Route>
      <Route exact path="/profile/*" element={<Profile />}></Route>
      <Route path="/add/payment-method" element={<FormPaymentMethod />}></Route>
      <Route path="/edit/payment-method/:id" element={<FormPaymentMethod edit={true} />}></Route>
      <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  )
}

export default RouterApp
