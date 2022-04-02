import "./App.css"
import RouterApp from "./routes/RouterApp"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getAllCategories,
  getAllEmails,
  getAllPaymentMethod,
  getAllProperties,
  getAllServices,
  getAllUsers,
  getAllRentals,
  getFavorites,
  loadUser,
} from "./redux/actions"
import { Route, Routes } from "react-router-dom"
import Login from "./components/DropDown/Login"

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const admin = useSelector(state => state.user.type)

  useEffect(() => {
    localStorage.tokenRentalApp && dispatch(loadUser())
    dispatch(getAllProperties())
    dispatch(getAllCategories())
    dispatch(getAllServices())
  }, [])

  useEffect(() => {
    if (auth) {
      dispatch(getFavorites())
      dispatch(getAllPaymentMethod())
    }
  }, [auth])

  useEffect(() => {
    if (auth && (admin === "ADMIN" || admin === "SUBADMIN")) {
      dispatch(getAllEmails())
      dispatch(getAllUsers())
      dispatch(getAllRentals())
    }
  }, [admin])

  return (
    <>
      <RouterApp />
    </>
  )
}

export default App
