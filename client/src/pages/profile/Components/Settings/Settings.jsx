import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changePassword } from "../../../../redux/actions"
import { useAuth0 } from "@auth0/auth0-react"

import {
  SubMenu,
  Title,
  Input,
  Button,
  ChangePassword,
  PasswordError,
} from "./styled"

export default function Settings() {
  const dispatch = useDispatch()
  const [compare, setCompare] = useState("")
  const [error, setError] = useState("")
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
  })
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  function handleChangeCompare(e) {
    setCompare(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (input.newPassword === compare) {
      dispatch(changePassword(input))
      setInput({
        oldPassword: "",
        newPassword: "",
      })
      setCompare("")
      setError("")
    } else {
      setError("New passwords must be the same")
    }
  }

  // si es usuario de facebook o google no puede cambiar password

  const { isAuthenticated } = useAuth0()

  return (
    <SubMenu>
      <Title>Change password</Title>
      {isAuthenticated ? (
        <p>You don´t have a password !</p>
      ) : (
        <ChangePassword>
          <Input
            placeholder="Old Password"
            name="oldPassword"
            value={input.oldPassword}
            onChange={e => handleChange(e)}></Input>
          <Input
            placeholder="New Password"
            name="newPassword"
            value={input.newPassword}
            onChange={e => handleChange(e)}></Input>
          <Input
            placeholder="New Password"
            value={compare}
            onChange={e => handleChangeCompare(e)}></Input>
          {error && <PasswordError>{error}</PasswordError>}
          <Button onClick={e => handleSubmit(e)}>Update Password</Button>
        </ChangePassword>
      )}
    </SubMenu>
  )
}
