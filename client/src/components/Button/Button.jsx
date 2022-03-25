import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { Container, Icon, ImageContainer } from "./styled"
import DropDown from "../DropDown/DropDown"

export default function Button() {
  const [open, setOpen] = useState(false)

  function handleClick() {
    
      setOpen(!open)
  
  }

  return (
    <Container onClick={handleClick}>
      <Icon>
        <AiOutlineMenu />
      </Icon>
      <ImageContainer>
        <FaRegUserCircle />
      </ImageContainer>
      {open && <DropDown open={open} />}
    </Container>
  )
}
