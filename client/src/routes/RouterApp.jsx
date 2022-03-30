import React from "react"
import { Routes, Route } from "react-router-dom"
import Details from "../pages/details-property/detailsProperty.jsx"
import AboutUs from "../pages/about-us/AboutUs"
import Home from "../pages/home/Home.jsx"
import { AddProperty } from "../components/formAddProperty/addProperty.jsx"
import Profile from "../pages/profile/profile.jsx"
import Error404 from "../pages/404/Error404.jsx"
import SignUp from "../components/DropDown/SignUp.jsx"
import Login from "../components/DropDown/Login.jsx"
import FormPaymentMethod from "../pages/profile/Components/FormPaymentMethod/FormPaymentMethod.jsx"
import Forgotpassword from "../pages/ForgotPassword/ForgotPassword.jsx"
import Help from "../pages/Help/Help.jsx"
import { EditProperty } from "../components/formAddProperty/editProperty.jsx"
import Emails from "../pages/AdminDashboard/Emails.jsx"
import FormEmail from "../pages/AdminDashboard/FormEmail.jsx"

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/property-info/:id" element={<Details />} />
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/editProperty/:id" element={<EditProperty />} />
      <Route exact path="/addProperty" element={<AddProperty />} />
      <Route exact path="/logIn" element={<Login />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/profile/*" element={<Profile />} />
      <Route path="/add/payment-method" element={<FormPaymentMethod />} />
      <Route
        path="/edit/payment-method/:id"
        element={<FormPaymentMethod edit={true} />}
      />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/help" element={<Help />} />
      <Route path="/dashboard">
        <Route path="emails" element={<Emails />} />
        <Route path="emails/create" element={<FormEmail />} />
        <Route path="emails/resend/:id" element={<FormEmail resend={true} />} />
      </Route>
      <Route path="/*" element={<Error404 />} />
      {/* <Route exact path="favorites" element={<Favorites />}></Route> */}
    </Routes>
  )
}

export default RouterApp
