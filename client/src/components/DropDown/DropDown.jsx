import React, { useEffect, useState } from "react"

import { DropDownMenu, DropDownItem } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import Logout from "../auth/logout"

export default function DropDown({ open }) {
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  const { isAuthenticated } = useAuth0()

  return (
    <>
      <DropDownMenu visibility={open ? "true" : "false"}>
        {isAuthenticated || auth ? (
          <>
            <Link to="/profile">
              <DropDownItem>Profile</DropDownItem>
            </Link>
            <DropDownItem>
              {/* Deberia haber una autenticacion para solo mostrar esta opcion si el usuario esta loggeado */}
              <Link to="/addProperty">Add Property</Link>
            </DropDownItem>
            <hr />
            <DropDownItem>
              <Logout />
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
