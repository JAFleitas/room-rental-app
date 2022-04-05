import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Modal from "../../../../components/modal/modal"
import { deleteUser } from "../../../../redux/actions"
import { RedButtonn, RedButton, SubMenu, Title, WhiteButton } from "./styled"

export default function Account() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = useSelector(state => state.user.id)
  function handleSubmit(e) {
    dispatch(deleteUser(id))
    navigate("/")
  }

  return (
    <SubMenu>
      <Title>Delete Account</Title>
      <RedButton
        onClick={() => {
          setOpen(!open)
        }}>
        Delete
      </RedButton>
      {open && (
        <Modal
          modalShow={open}
          overlayShow={true}
          outButton={false}
          setModalShow={setOpen}>
          <Title>Are you sure?</Title>
          <RedButtonn onClick={e => handleSubmit(e)}>Delete</RedButtonn>
          <WhiteButton onClick={() => setOpen(!open)}>Close</WhiteButton>
        </Modal>
      )}
    </SubMenu>
  )
}
