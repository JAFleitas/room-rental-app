import React, { useState } from "react"
import {
  Form,
  SendButton,
  Field,
  Input,
  Label,
  Container,
  RedButton,
} from "./styled"
import { logIn } from "../../redux/actions/index"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import LoginWithGoogle from "../auth/login"
import LoginWithFacebook from "../auth/loginWithFacebook"
import { WarningAlert } from "../../utilities/alerts"

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

  function handleSubmitLogIn(e) {
    e.preventDefault()

    if (!logInForm.email || !logInForm.password) {
      WarningAlert("Missing fields, please try again")
    } else {
      dispatch(logIn(logInForm))
    }
  }

  return (
    <Container>
      <Form fields={2}>
        <Field>
          <Label>Email: </Label>
          <Input
            autoFocus
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
        <SendButton
          disabled={!logInForm.email || !logInForm.password}
          onClick={e => handleSubmitLogIn(e)}>
          Log in
        </SendButton>
        <LoginWithGoogle />
        <LoginWithFacebook />
        <SendButton signup={true} onClick={() => navigate("/signUp")}>
          Sign up
        </SendButton>
        <RedButton onClick={() => navigate("/forgot-password")}>
          I forgot my password
        </RedButton>
      </Form>
    </Container>
  )
}

export default Login
