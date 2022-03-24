import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changePassword } from "../../../../utilities/changePassword";
import { SubMenu, Title, Input, Button, ChangePassword,PasswordError } from "./styled"


export default function Settings() {
    const dispatch=useDispatch();
    const [compare, setCompare]= useState("")
    const [error, setError]= useState("")
    const [input, setInput] = useState({
        oldPassword:"",
        newPassword:""
      })
    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })
      }
    function handleChangeCompare(e){
        setCompare(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(input.newPassword===compare){

            changePassword(input)
            setInput({
                oldPassword:"",
                newPassword:""
              })
            setCompare("")
            setError("")
        }else{
            setError("New passwords must be the same")
        }
    }


  return (
    <SubMenu>
    <Title>Change password</Title>
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
      value={compare.newPassword}
      onChange={e => handleChangeCompare(e)}></Input>
      {error && <PasswordError>{error}</PasswordError>}
      <Button onClick={(e)=>handleSubmit(e)}>Update Password</Button>
    </ChangePassword>
  </SubMenu>

  )
}