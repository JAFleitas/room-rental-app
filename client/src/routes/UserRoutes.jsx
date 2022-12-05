import React from "react"
import { Route, Routes } from "react-router-dom"
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
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import FormComment from "../pages/Comment/FormComment.jsx"
import { ToastContainer } from "react-toastify"
import { Payment } from "../components/Payment_gateway/payment.jsx"
import LandingPage from "../pages/LandingPage/LandingPage"

const UserRoutes = () => {
  return (
    <>
      <Nav />
      <ToastContainer limit={3} />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/logIn" element={<Login />} />
        <Route path="/property-info/:id" element={<Details />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/editProperty/:id" element={<EditProperty />} />
        <Route exact path="/addProperty" element={<AddProperty />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/profile/*" element={<Profile />} />
        <Route path="/add/payment-method" element={<FormPaymentMethod />} />
        <Route
          path="/edit/payment-method/:id"
          element={<FormPaymentMethod edit={true} />}
        />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/help" element={<Help />} />
        <Route path="/comment/:id" element={<FormComment />} />
        <Route path="/pay-reservation" element={<Payment />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default UserRoutes
