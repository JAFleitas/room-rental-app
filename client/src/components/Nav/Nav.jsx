import React from "react"
import Button from "../Button/Button"
import { Navigator, IconContainer, Icon, Title } from "./styled"

export default function Nav() {
  function onClick(e) {
    e.preventDefault()
  }

  return (
    <Navigator>
      <IconContainer>
        <Icon src="client\src\assets\Rental_App_Logo.png"></Icon>
        <Title>Rental App</Title>
      </IconContainer>
      <Button />
    </Navigator>
  )
}
