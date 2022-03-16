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
        <Icon src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7DUhq_4c&#x2F;view?embed"></Icon>
        <Title>Rental App</Title>
      </IconContainer>
      <Button />
    </Navigator>
  )
}

//<Button icon={<AiOutlineMenu />} onClick={onClick} where="/home" />
