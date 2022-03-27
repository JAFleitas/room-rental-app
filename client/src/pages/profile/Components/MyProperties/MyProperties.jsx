import React from "react"
import { SubMenu, Title } from "./styled"
import { useSelector } from "react-redux"

export default function MyProperties() {
  const user = useSelector(state => state.user)

  return (
    <SubMenu>
      <Title>"My properties"</Title>
      
    </SubMenu>
  )
}
