import React from "react"
import Button from "../Button/Button"
import { Navigator, IconContainer, Logo, Title, ToHome } from "./styled"
import logo from "../../assets/Rental_App_Logo.png"

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
        <Title>Rental App</Title>
      </IconContainer>
      <Button />
    </Navigator>
  )
}
