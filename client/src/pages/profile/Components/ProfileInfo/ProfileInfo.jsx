import React from "react"
import { SubMenu, FullName, Info, InfoContainer, Label } from "./styled"
import { useSelector } from "react-redux"

export default function ProfileInfo() {
  const user = useSelector(state => state.user)

  return (
    <SubMenu>
      <FullName>{user.name ? user.name : "Name"}</FullName>
      <InfoContainer>
        <Label>Name</Label>
        <Info>{user.name ? user.name : "Incomplete"}</Info>
        <Label>Lastname</Label>
        <Info>{user.lastname ? user.lastname : "Incomplete"}</Info>
        <Label>Email</Label>
        <Info>{user.email ? user.email : "Incomplete"}</Info>
        <Label>Country</Label>
        <Info>{user.country || "Incomplete"}</Info>
      </InfoContainer>
    </SubMenu>
  )
}
