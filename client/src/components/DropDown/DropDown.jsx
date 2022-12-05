import React from "react"
import { DropDownMenu, DropDownItem } from "./styled"
import { useNavigate } from "react-router-dom"
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
            <DropDownItem onClick={() => navigate("/profile")}>
              Profile
            </DropDownItem>
            <DropDownItem onClick={() => navigate("/addProperty")}>
              {/* Deberia haber una autenticacion para solo mostrar esta opcion si el usuario esta loggeado */}
              Add Property
            </DropDownItem>
            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
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
