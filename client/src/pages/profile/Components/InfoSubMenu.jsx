import React from "react"
import { SubMenu, FullName, Info, InfoContainer } from "./styled"
import { useSelector } from "react-redux"

export default function InfoSubMenu() {
  const user = useSelector(state => state.user)

  return (
    <SubMenu>
      <FullName>{user.name ? user.name : "Name"}</FullName>
      <InfoContainer>
        <Info>{user.email ? user.email : "Email"}</Info>
        <Info>
          {user.country ? user.country + ", " : "Country, "}
          {user.city ? user.city : "city"}
        </Info>
      </InfoContainer>
    </SubMenu>
  )
}
