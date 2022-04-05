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
  getMonthlyIncomes,
} from "./redux/actions"
import { useNavigate } from "react-router-dom"

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const admin = useSelector(state => state.user.type)
  const navigate = useNavigate()

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
      dispatch(getMonthlyIncomes())
    }
  }, [admin])

  useEffect(() => {
    if (auth && admin) {
      if (admin === "NORMAL") {
        return navigate("/", { scroll: { x: 0, y: 0 } })
      } else {
        return navigate("/dashboard")
      }
    }
  }, [auth, admin])

  return (
    <>
      <RouterApp />
    </>
  )
}

export default App
