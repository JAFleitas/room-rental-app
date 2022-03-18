import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { Container, Icon, ImageContainer } from "./styled"
import DropDown from "../DropDown/DropDown"

export default function Button() {
  const [open, setOpen] = useState(false)
  const [visibility, setVisibility] = useState(false)

  function handleClick() {
    if (open === false) {
      setOpen(true)
      setVisibility(true)
    } else if (visibility === true) {
      setVisibility(false)
    } else if (visibility === false) {
      setVisibility(true)
    }
  }

  return (
    <Container onClick={handleClick}>
      <Icon>
        <AiOutlineMenu />
      </Icon>
      <ImageContainer>
        <FaRegUserCircle />
      </ImageContainer>
      {open && <DropDown visibility={visibility} />}
    </Container>
  )
}
