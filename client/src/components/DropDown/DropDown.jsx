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

export default function DropDown({ visibility }) {
  const [logInShow, setLogInShow] = useState(false)
  const [visible, setVisible] = useState(visibility)

  useEffect(() => {
    if (logInShow === true) {
      setVisible(false)
    } else {
      setVisible(visibility)
      console.log(visibility)
      console.log(visible)
    }
  })

  function handleClick(e) {
    console.log("clicked")
    setLogInShow(true)
    console.log(logInShow)
  }

  return (
    <>
      <DropDownMenu visibility={visible}>
        <DropDownItem onClick={handleClick}>Log In</DropDownItem>
        <DropDownItem>Sign Up</DropDownItem>
        <DropDownItem>Profile</DropDownItem>
      </DropDownMenu>
      <Modal
        overlayShow={true}
        modalShow={logInShow}
        setModalShow={setLogInShow}>
        <ModalTitle>Log In</ModalTitle>
        <ModalForm>
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
