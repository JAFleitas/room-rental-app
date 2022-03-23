import React, { useEffect, useState } from "react"
import { postNewUser, logIn, logout } from "../../redux/actions/index"
import {
  DropDownMenu,
  DropDownItem,
  ModalInput,
  ModalForm,
  ModalLabel,
  ModalTitle,
  ModalField,
  ModalButton,
  ModalButtonFacebook,
  ModalButtonGoogle,
} from "./styled"
import Modal from "../modal/modal"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"

export default function DropDown({ visibility }) {
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [logInShow, setLogInShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    lastname: "",
    country: "",
    city: "",
    email: "",
    password: "",
  })
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()

  const [visible, setVisible] = useState(visibility)
  useEffect(() => {
    if (logInShow === true) {
      setVisible(false)
    } else {
      setVisible(visibility)
    }
  })

  function handleLogIn() {
    console.log("clicked")
    setLogInShow(true)
  }

  function handleSignUp() {
    console.log("clicked")
    setSignUpShow(true)
  }

  function handleChanges(e) {
    const change = { ...signUpForm }
    change[e.target.name] = e.target.value
    setSignUpForm(change)
  }
  function handleChangeLogIn(e) {
    e.preventDefault()
    setLogInForm({ ...logInForm, [e.target.name]: e.target.value })
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
      alert("Missing fields, please try again")
    } else {
      dispatch(postNewUser(signUpForm))
      alert(`User ${signUpForm.name}created succesfully`)
    }

    //function handleLogin() {
    //dispatch()
  }
  function handleSubmitLogIn(e) {
    e.preventDefault()
    if (!logInForm.email || !logInForm.password) {
      alert("Missing fields, please try again")
    } else {
      dispatch(logIn(logInForm))
      alert(`Log In succesfully`)
    }

    //function handleLogin() {
    //dispatch()
  }

  return (
    <>
      <DropDownMenu visibility={visible}>
        {auth ? (
          <>
            <Link to="/profile">
              <DropDownItem>Profile</DropDownItem>
            </Link>
            <DropDownItem>
              {/* Deberia haber una autenticacion para solo mostrar esta opcion si el usuario esta loggeado */}
              <Link to="/form">Add Property</Link>
            </DropDownItem>
            <hr />
            <DropDownItem>
              <span onClick={() => {
                dispatch(logout())
                navigate("/");
              }}>
                Logout
              </span>
            </DropDownItem>
          </>
        ) : (
          <>
            <DropDownItem onClick={handleLogIn}>Log In</DropDownItem>
            <DropDownItem onClick={handleSignUp}>Sign Up</DropDownItem>
          </>
        )}
      </DropDownMenu>
      {/* Login */}
      <Modal
        overlayShow={true}
        modalShow={logInShow}
        setModalShow={setLogInShow}>
        <ModalTitle>Log In</ModalTitle>
        <ModalForm fields={2}>
          <ModalField>
            <ModalLabel>Email: </ModalLabel>
            <ModalInput
              type="text"
              name="email"
              value={logInForm.email}
              onChange={handleChangeLogIn}
              placeholder="Email"></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Password: </ModalLabel>
            <ModalInput
              type="text"
              name="password"
              value={logInForm.password}
              onChange={handleChangeLogIn}
              placeholder="Password"></ModalInput>
          </ModalField>
          <ModalButton type="submit" onClick={handleSubmitLogIn}>
            Log in
          </ModalButton>
          <ModalButtonFacebook>
            <BsFacebook />
            Log in with Facebook
          </ModalButtonFacebook>
          <ModalButtonGoogle>
            <FcGoogle />
            Log in with Google
          </ModalButtonGoogle>
        </ModalForm>
      </Modal>
      {/* Register */}
      <Modal
        overlayShow={true}
        modalShow={signUpShow}
        setModalShow={setSignUpShow}>
        <ModalTitle>Sign Up</ModalTitle>
        <ModalForm fields={6}>
          <ModalField>
            <ModalLabel>Name: </ModalLabel>
            <ModalInput
              type="text"
              name="name"
              value={signUpForm.name}
              onChange={handleChanges}
              placeholder="Name..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Last Name: </ModalLabel>
            <ModalInput
              type="text"
              name="lastname"
              value={signUpForm.lastname}
              onChange={handleChanges}
              placeholder="Last Name..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Country: </ModalLabel>
            <ModalInput
              type="text"
              name="country"
              value={signUpForm.country}
              onChange={handleChanges}
              placeholder="Country..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>City: </ModalLabel>
            <ModalInput
              type="text"
              name="city"
              value={signUpForm.city}
              onChange={handleChanges}
              placeholder="City..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Email: </ModalLabel>
            <ModalInput
              type={"email"}
              name="email"
              value={signUpForm.email}
              onChange={handleChanges}
              placeholder="Email..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Password: </ModalLabel>
            <ModalInput
              type={"password"}
              name="password"
              value={signUpForm.password}
              onChange={handleChanges}
              placeholder="Password..."></ModalInput>
          </ModalField>

          <ModalButton type="submit" onClick={handleSubmitSignUp}>
            Sign Up
          </ModalButton>
          <ModalButtonFacebook>
            <BsFacebook />
            Sign Up with Facebook
          </ModalButtonFacebook>
          <ModalButtonGoogle>
            <FcGoogle />
            Sign Up with Google
          </ModalButtonGoogle>
        </ModalForm>
      </Modal>
    </>
  )
}
