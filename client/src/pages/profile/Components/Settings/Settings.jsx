import React from "react"
import { SubMenu, Title, Input, Button, ChangePassword } from "./styled"


export default function Settings() {
    const [compare, setCompare]= useState("")
    const [input, setInput] = useState({
        oldPassword,
        newPassword
      })
    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })
    
        setError(
          validate({
            ...input,
            [e.currentTarget.name]: e.target.value,
          }),
        )
      }


  return (
    <SubMenu>
    <Title>Change password</Title>
    <ChangePassword>
      <Input
      placeholder="Old Password"
      name="oldPassword"
      value={input.oldPassword}></Input>
      <Input
      placeholder="New Password"
      name="newPassword"
      value={input.newPassword}></Input>
      <Input
      placeholder="New Password"
      ></Input>
      <Button>Update Password</Button>
    </ChangePassword>
  </SubMenu>

  )
}