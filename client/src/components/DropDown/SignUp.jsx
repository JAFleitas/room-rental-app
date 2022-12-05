import React, { useState } from "react"
import {
  Form,
  SendButton,
  Field,
  Input,
  Label,
  Title,
  Container,
} from "./styled"
import { loadUser, postNewUser } from "../../redux/actions/index"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import LoginWithGoogle from "../auth/login"
import LoginWithFacebook from "../auth/loginWithFacebook"
import { toast } from "react-toastify"
import { WarningAlert } from "../../utilities/alerts"
const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    lastname: "",
    country: "",
    city: "",
    email: "",
    password: "",
  })

  function handleChanges(e) {
    const change = { ...signUpForm }
    change[e.target.name] = e.target.value
    setSignUpForm(change)
  }

  function handleSubmitSignUp(e) {
    e.preventDefault()
    if (
      !signUpForm.name ||
      !signUpForm.lastname ||
      !signUpForm.country ||
      !signUpForm.email ||
      !signUpForm.city ||
      !signUpForm.password
    ) {
      WarningAlert("Missing fields, please try again")
    } else {
      dispatch(postNewUser(signUpForm))
      dispatch(loadUser())
      navigate("/")
    }

    //function handleLogin() {
    //dispatch()
  }
  return (
    <Container>
      <Title>Sign Up</Title>
      <Form fields={6}>
        <Field>
          <Label>Name: </Label>
          <Input
            autoFocus
            type="text"
            name="name"
            value={signUpForm.name}
            onChange={handleChanges}
            placeholder="Name..."></Input>
        </Field>
        <Field>
          <Label>Last Name: </Label>
          <Input
            type="text"
            name="lastname"
            value={signUpForm.lastname}
            onChange={handleChanges}
            placeholder="Last Name..."></Input>
        </Field>
        <Field>
          <Label>Country: </Label>
          <Input
            type="text"
            name="country"
            value={signUpForm.country}
            onChange={handleChanges}
            placeholder="Country..."></Input>
        </Field>
        <Field>
          <Label>City: </Label>
          <Input
            type="text"
            name="city"
            value={signUpForm.city}
            onChange={handleChanges}
            placeholder="City..."></Input>
        </Field>
        <Field>
          <Label>Email: </Label>
          <Input
            type={"email"}
            name="email"
            value={signUpForm.email}
            onChange={handleChanges}
            placeholder="Email..."></Input>
        </Field>
        <Field>
          <Label>Password: </Label>
          <Input
            type={"password"}
            name="password"
            value={signUpForm.password}
            onChange={handleChanges}
            placeholder="Password..."></Input>
        </Field>

        <SendButton
          disabled={
            !signUpForm.email ||
            !signUpForm.name ||
            !signUpForm.password ||
            !signUpForm.lastname ||
            !signUpForm.country ||
            !signUpForm.city
          }
          type="submit"
          onClick={handleSubmitSignUp}>
          Sign Up
        </SendButton>
        <LoginWithGoogle />
        <LoginWithFacebook />
      </Form>
    </Container>
  )
}

export default SignUp
