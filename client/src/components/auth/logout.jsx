import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch } from "react-redux"
import { actionLogout } from "../../redux/actions/index"

export default function Logout() {
  const { isAuthenticated, logout } = useAuth0()
  const dispatch = useDispatch()
  return (
    isAuthenticated && (
      <button
        onClick={() => {
          dispatch(actionLogout())
          logout({ returnTo: window.location.origin })
        }}>
        Logout
      </button>
    )
  )
}
