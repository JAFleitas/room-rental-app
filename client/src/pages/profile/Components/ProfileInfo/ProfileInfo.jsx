import React, { useEffect, useState } from "react"
import {
  SubMenu,
  FullName,
  Info,
  InfoContainer,
  Label,
  ButtonEdit,
} from "./styled"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const api = import.meta.env.VITE_APP_API_URL
import getHeaderToken from "../../../../utilities/getHeadertoken"
import { loadUser } from "../../../../redux/actions"

export default function ProfileInfo() {
  const user = useSelector(state => state.user)
  const [dataUser, setDataUser] = useState(user)
  const [editStatus, setEditStatus] = useState(false)
  const dispatch = useDispatch()

  const handleChangeInfo = e => {
    const { name, value } = e.target
    setDataUser(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const cancelEditData = () => {
    setDataUser(user)
    setEditStatus(false)
  }

  const sendDataEdit = async () => {
    if (
      dataUser.name &&
      dataUser.lastname &&
      dataUser.country &&
      dataUser.email &&
      dataUser.account_number !== ""
    ) {
      const res = await axios.put(
        `${api}/users`,
        { data: dataUser },
        getHeaderToken(),
      )
      console.log(res.data)
      dispatch(loadUser())
      setEditStatus(false)
    } else {
      console.log("Hay campos vacios")
    }
  }

  useEffect(() => {
    setDataUser(user)
  }, [user])

  return (
    <SubMenu>
      <FullName>{dataUser.name ? dataUser.name : "Name"}</FullName>
      <InfoContainer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {editStatus ? (
            <>
              <ButtonEdit onClick={sendDataEdit}>Save</ButtonEdit>
              <ButtonEdit bgColor={true} onClick={cancelEditData}>
                Cancel
              </ButtonEdit>
            </>
          ) : (
            <ButtonEdit
              onClick={() => {
                setEditStatus(true)
              }}>
              Edit Profile
            </ButtonEdit>
          )}
        </div>
        <Label>Name</Label>
        {user.name && editStatus ? (
          <Info>
            <input
              type="text"
              name="name"
              value={dataUser.name}
              onChange={handleChangeInfo}
            />
          </Info>
        ) : (
          <Info>{user.name ? user.name : "Incomplete"}</Info>
        )}
        <Label>Lastname</Label>
        {user.lastname && editStatus ? (
          <Info>
            <input
              type="text"
              value={dataUser.lastname}
              name="lastname"
              onChange={handleChangeInfo}
            />
          </Info>
        ) : (
          <Info>{user.lastname ? user.lastname : "Incomplete"}</Info>
        )}
        <Label>Email</Label>
        {user.email && editStatus ? (
          <Info>
            <input
              type="text"
              value={dataUser.email}
              name="email"
              onChange={handleChangeInfo}
            />
          </Info>
        ) : (
          <Info>{user.email ? user.email : "Incomplete"}</Info>
        )}
        <Label>Country</Label>
        {user.country && editStatus ? (
          <Info>
            <input
              type="text"
              value={dataUser.country}
              name="country"
              onChange={handleChangeInfo}
            />
          </Info>
        ) : (
          <Info>{user.country ? user.country : "Incomplete"}</Info>
        )}
        <Label>Number of count</Label>
        {user.account_number && editStatus ? (
          <Info>
            <input
              type="text"
              value={dataUser.account_number}
              name="account_number"
              onChange={handleChangeInfo}
            />
          </Info>
        ) : (
          <Info>
            {user.account_number ? user.account_number : "Incomplete"}
          </Info>
        )}
      </InfoContainer>
    </SubMenu>
  )
}
