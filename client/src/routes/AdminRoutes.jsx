import React from "react"
import { Route, Routes } from "react-router-dom"
import Error404 from "../pages/404/Error404.jsx"
import Emails from "../pages/AdminDashboard/Emails.jsx"
import FormEmail from "../pages/AdminDashboard/FormEmail.jsx"
import Users from "../pages/AdminDashboard/Users.jsx"
import LeftBar from "../pages/AdminDashboard/LeftBar.jsx"

const AdminRoutes = () => {
  return (
    <>
    <LeftBar />
    <Routes>
      <Route path="/dashboard">
        <Route path="emails" element={<Emails />} />
        <Route path="emails/create" element={<FormEmail />} />
        <Route path="emails/resend/:id" element={<FormEmail resend={true} />} />
        <Route path="users" element={<Users />} />
      </Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
    </>
  )
}

export default AdminRoutes
