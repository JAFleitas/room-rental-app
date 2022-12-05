import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Modal from "../../../../components/modal/modal"
import { deleteUser } from "../../../../redux/actions"
import { Title,SubMenu } from "../../../../styles/global.css"
import { RedButton, WhiteButton } from "./styled"

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

      <div style={{display:"flex",width:"100%", height:"100%",justifyContent:"center"}}>
        <RedButton
          onClick={() => {
            setOpen(!open)
          }}>
          Delete
        </RedButton>
      </div>
      {open && (
        <Modal
          modalShow={open}
          overlayShow={true}
          outButton={false}
          setModalShow={setOpen}>
          <div style={{
            display:"flex",
            width:"100#",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"20px"
          }}>
          <Title>Are you sure?</Title>
          <RedButton onClick={e => handleSubmit(e)}>Delete</RedButton>
          <WhiteButton onClick={() => setOpen(!open)}>Close</WhiteButton>
          </div>
        </Modal>
      )}
    </SubMenu>
  )
}
