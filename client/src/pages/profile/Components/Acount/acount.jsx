import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Modal from "../../../../components/modal/modal"
import { deleteUser } from "../../../../redux/actions"
import { RedButton, SubMenu, Title, WhiteButton } from "./styled"

export default function Account() {
 const [open, setOpen]=useState(false)
 const dispatch= useDispatch();
 const navigate= useNavigate();
 const id = useSelector(state=> state.user.id)
 function handleSubmit(e){
     dispatch(deleteUser(id))
     navigate("/")
 }

  return (
    <SubMenu>
      <Title>Delete Acount</Title>
      <RedButton onClick={()=>{setOpen(!open)}}>Delete</RedButton>
      {open && 
      <Modal modalShow={open}
      overlayShow={true}
      outButton={false}
      setModalShow={setOpen}>
          <Title>Are you sure?</Title>
          <RedButton onClick={(e)=>handleSubmit(e)}>Delete</RedButton>
          <WhiteButton onClick={()=>setOpen(!open)}>Close</WhiteButton>
      </Modal>
      }
    </SubMenu>
  )
}