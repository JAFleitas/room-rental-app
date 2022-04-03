import React from "react"
import { Route, Routes } from "react-router-dom"
import Error404 from "../pages/404/Error404.jsx"
import Emails from "../pages/AdminDashboard/Emails.jsx"
import FormEmail from "../pages/AdminDashboard/FormEmail.jsx"
import Users from "../pages/AdminDashboard/Users.jsx"
import LeftBar from "../pages/AdminDashboard/LeftBar/LeftBar.jsx"
import FormUser from "../pages/AdminDashboard/FormUser.jsx"
import LandingPage from "../pages/LandingPage/LandingPage"

import Security from "../pages/AdminDashboard/Security.jsx"

import Rentals from "../pages/AdminDashboard/Rentals.jsx"

const AdminRoutes = () => {
  return (
    <>
      <LeftBar />
      <Routes>
        <Route path="/dashboard">
          <Route path="security" element={<Security />} />
          <Route path="emails" element={<Emails />} />
          <Route path="emails/create" element={<FormEmail />} /> 
          <Route path="emails/resend/:id" element={<FormEmail resend={true} />}/>
          <Route path="users" element={<Users />} />
          <Route path="users/actions/:id" element={<FormUser />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="landing-page" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default AdminRoutes
