import React from "react"
import Button from "../Button/Button"
import SearchBar from "../SearchBar/SearchBar"
import { Navigator, IconContainer, Logo, ToHome } from "./styled"
import logo from "../../assets/Rental_App_Logo.png"
import { Link } from "react-router-dom"

export default function Nav() {
  function onClick(e) {
    e.preventDefault()
  }

  return (
    <Navigator>
      <IconContainer>
        <ToHome to="/">
          <Logo src={logo}></Logo>
        </ToHome>
      </IconContainer>
      {/* <SearchBar /> */}
      <Button />
    </Navigator>
  )
}
