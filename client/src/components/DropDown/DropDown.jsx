import React from "react"
import { DropDownMenu, DropDownItem } from "./styled"

export default function DropDown() {
  return (
    <DropDownMenu>
      <DropDownItem>Log In</DropDownItem>
      <DropDownItem>Sign Up</DropDownItem>
      <DropDownItem>Profile</DropDownItem>
    </DropDownMenu>
  )
}
