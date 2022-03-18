import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { Container, Icon, ImageContainer } from "./styled"
import DropDown from "../DropDown/DropDown"

export default function Button() {
  const [open, setOpen] = useState(false)

  return (
    <Container onClick={() => setOpen(!open)}>
      <Icon>
        <AiOutlineMenu />
      </Icon>
      <ImageContainer>
        <FaRegUserCircle />
      </ImageContainer>
      {open && <DropDown />}
    </Container>
  )
}
