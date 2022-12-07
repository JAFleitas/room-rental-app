import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { Container, Icon, ImageContainer, ProfileImage } from "./styled"
import DropDown from "../DropDown/DropDown"
import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"

export default function Button() {
  const [open, setOpen] = useState(false)

  const USER = useSelector(state => state.user)

  const { user } = useAuth0()

  function handleClick() {
    setOpen(!open)
  }

  return (
    <Container onClick={handleClick}>
      {user ? (
        <ImageContainer>
          <ProfileImage src={user && user.picture} />
        </ImageContainer>
      ) : USER.photo ? (
        <ImageContainer>
          <ProfileImage src={USER && USER.photo} />
        </ImageContainer>
      ) : null}
      {open && <DropDown open={open} />}
      <Icon>
        <AiOutlineMenu />
      </Icon>
    </Container>
  )
}
