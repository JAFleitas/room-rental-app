import React, { useEffect, useState } from "react"
//import { logout } from "../../redux/actions/index"
import { DropDownMenu, DropDownItem } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"

export default function DropDown({ open }) {
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, logout } = useAuth0()

  return (
    <>
      <DropDownMenu visibility={open ? "true" : "false"}>
        {isAuthenticated ? (
          <>
            <Link to="/profile">
              <DropDownItem>Profile</DropDownItem>
            </Link>
            <DropDownItem>
              {/* Deberia haber una autenticacion para solo mostrar esta opcion si el usuario esta loggeado */}
              <Link to="/form">Add Property</Link>
            </DropDownItem>
            <hr />
            <DropDownItem
              onClick={() => {
                console.log("logout")
                logout({ returnTo: window.location.origin })
              }}>
              Logout
            </DropDownItem>
          </>
        ) : (
          <>
            <DropDownItem onClick={() => navigate("/logIn")}>
              Log In
            </DropDownItem>
            <DropDownItem onClick={() => navigate("/signUp")}>
              Sign Up
            </DropDownItem>
          </>
        )}
        <DropDownItem onClick={() => navigate("/help")}>Help</DropDownItem>
      </DropDownMenu>
    </>
  )
}
