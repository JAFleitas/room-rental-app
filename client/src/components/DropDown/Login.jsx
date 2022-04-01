import React, { useState } from "react"
import {
  Form,
  SendButton,
  Field,
  Input,
  Label,
  Title,
  Container,
  RedButton,
} from "./styled"
import { logIn } from "../../redux/actions/index"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import LoginWithGoogle from "../auth/login"
import LoginWithFacebook from "../auth/loginWithFacebook"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  })

  function handleChangeLogIn(e) {
    e.preventDefault()
    setLogInForm({ ...logInForm, [e.target.name]: e.target.value })
  }
  const form = useSelector(state => state.formRentalProperty)
  function handleSubmitLogIn(e) {
    e.preventDefault()
    // console.log("submited")
    if (!logInForm.email || !logInForm.password) {
      alert("Missing fields, please try again")
    } else {
      dispatch(logIn(logInForm))
      if (form.propertyID) {
        navigate("/pay-reservation")
      } else {
        navigate("/")
      }
    }
  }
  return (
    <Container>
      <Form fields={2}>
        <Field>
          <Label>Email: </Label>
          <Input
            type="text"
            name="email"
            value={logInForm.email}
            onChange={handleChangeLogIn}
            placeholder="Email"></Input>
        </Field>
        <Field>
          <Label>Password: </Label>
          <Input
            type="password"
            name="password"
            value={logInForm.password}
            onChange={handleChangeLogIn}
            placeholder="Password"></Input>
        </Field>
        <RedButton onClick={() => navigate("/forgot-password")}>
          I forgot my password
        </RedButton>
        <SendButton
          disabled={!logInForm.email || !logInForm.password}
          onClick={e => handleSubmitLogIn(e)}>
          Log in
        </SendButton>
        <LoginWithGoogle />
        <LoginWithFacebook />

        <SendButton signup={true}>Sign up</SendButton>
      </Form>
    </Container>
  )
}

export default Login
