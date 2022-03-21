import React, { useEffect, useState } from "react"
import {
  DropDownMenu,
  DropDownItem,
  ModalInput,
  ModalForm,
  ModalLabel,
  ModalTitle,
  ModalField,
} from "./styled"
import Modal from "../modal/modal"
import { Link } from "react-router-dom"

export default function DropDown({ visibility }) {
  const [logInShow, setLogInShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)

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
        </ModalForm>
      </Modal>
      <Modal
        overlayShow={true}
        modalShow={signUpShow}
        setModalShow={setSignUpShow}>
        <ModalTitle>Sign Up</ModalTitle>
        <ModalForm fields={3}>
          <ModalField>
            <ModalLabel>Fullname: </ModalLabel>
            <ModalInput
              type={"fullname"}
              name="fullname"
              placeholder="Fullname..."></ModalInput>
          </ModalField>
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
        </ModalForm>
      </Modal>
    </>
  )
}
