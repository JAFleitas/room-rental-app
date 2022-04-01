import React from "react"
import { useSelector } from "react-redux"
import AdminRoutes from "./AdminRoutes"
import UserRoutes from "./UserRoutes"


const RouterApp = () => {
  const admin = useSelector(state => state.user.type)
  const auth = useSelector(state => state.auth)

  return auth && admin === "ADMIN" ? <AdminRoutes /> : <UserRoutes />
}

export default RouterApp
