import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"

import { Container, Icon, ImageContainer } from "./styled"

export default function Button() {
  return (
    <Container>
      <Icon>
        <AiOutlineMenu />
      </Icon>
      <ImageContainer>
        <FaRegUserCircle />
      </ImageContainer>
    </Container>
  )
}
