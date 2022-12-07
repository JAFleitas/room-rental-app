import React from "react"
import Button from "../Button/Button"
import {
  Navigator,
  IconContainer,
  Logo,
  ToHome,
  DesktopNavigation,
} from "./styled"
import logo from "../../assets/Rental_App_Logo.png"
import { useDispatch } from "react-redux"
import {
  actionChangePage,
  actionSaveDates,
  getAllProperties,
  setOptionFilters,
} from "../../redux/actions/index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
export default function Nav() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const { isAuthenticated } = useAuth0()
  return (
    <Navigator>
      <IconContainer>
        <ToHome
          to="/"
          onClick={() => {
            dispatch(actionChangePage(1))
            dispatch(actionSaveDates({}))
            dispatch(
              setOptionFilters({
                minrooms: "",
                maxrooms: "",
                minpeople: "",
                maxpeople: "",
                order: "ASC",
                orderBy: "name",
                minprice: "",
                maxprice: "",
                type: "", //tipo de propiedad
                location: "",
              }),
            )
            dispatch(getAllProperties())
          }}>
          <Logo src={logo}></Logo>
        </ToHome>
      </IconContainer>
      <Button />
      {isAuthenticated || auth ? (
        <DesktopNavigation>
          <Link to="/help">Help</Link>
          <Link to="/profile/history"> History </Link>
          <Link to="/addProperty">Add Property</Link>
          <Link to="/profile">Profile</Link>
        </DesktopNavigation>
      ) : (
        <DesktopNavigation>
          <Link to="/help">Help</Link>
          <Link to="/signUp">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </DesktopNavigation>
      )}
    </Navigator>
  )
}
