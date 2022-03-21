import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { postNewUser } from "../../redux/actions/index"
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
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

export default function DropDown({ visibility }) {
  const dispatch= useDispatch;
  const [logInShow, setLogInShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    lastName: "",
    country: "",
    city: "",
    email: "",
    password: "",
  })

  let dispatch = useDispatch()

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
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(change)
    console.log(signUpForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (
      !signUpForm.name ||
      !signUpForm.lastName ||
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

  return (
    <>
      <DropDownMenu visibility={visible}>
        <DropDownItem onClick={handleLogIn}>Log In</DropDownItem>
        <DropDownItem onClick={handleSignUp}>Sign Up</DropDownItem>
        <DropDownItem>Profile</DropDownItem>
        <DropDownItem>
          {/* Deberia haber una autenticacion para solo mostrar esta opcion si el usuario esta loggeado */}
          <Link to="/form">Add Property</Link>
        </DropDownItem>
      </DropDownMenu>
      <Modal
        overlayShow={true}
        modalShow={logInShow}
        setModalShow={setLogInShow}>
        <ModalTitle>Log In</ModalTitle>
        <ModalForm fields={2}>
          <ModalField>
            <ModalLabel>Email: </ModalLabel>
            <ModalInput
              type={"email"}
              name="email"
              placeholder="Email..."></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Password: </ModalLabel>
            <ModalInput
              type={"password"}
              name="password"
              placeholder="Password..."></ModalInput>
          </ModalField>
          <ModalButton type="submit">Log in</ModalButton>
          <ModalButtonFacebook><BsFacebook/>Log in with Facebook</ModalButtonFacebook>
          <ModalButtonGoogle><FcGoogle/>Log in with Google</ModalButtonGoogle>
        </ModalForm>
      </Modal>
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
              name="lastName"
              value={signUpForm.lastName}
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

          <ModalButton type="submit" onClick={handleSubmit}>Sign Up</ModalButton>
          <ModalButtonFacebook><BsFacebook/>Sign Up with Facebook</ModalButtonFacebook>
          <ModalButtonGoogle><FcGoogle/>Sign Up with Google</ModalButtonGoogle>
        </ModalForm>
      </Modal>
    </>
  )
}
