import React, { useEffect, useState } from "react"
import {
  FullName,
  Info,
  InfoContainer,
  Label,
  ButtonEdit,
  ContainerLabel,
} from "./styled"
import { SubMenu } from "../../../../styles/global.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const api = import.meta.env.VITE_APP_API_URL
import getHeaderToken from "../../../../utilities/getHeadertoken"
import { loadUser } from "../../../../redux/actions"
import swal from "sweetalert"

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

  const sendDataEdit = () => {
    if (
      dataUser.name &&
      dataUser.lastname &&
      dataUser.country &&
      dataUser.email &&
      dataUser.account_number !== ""
    ) {
      swal({
        title: "Are you sure?",
        text: "Data will be updated",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async willUpdated => {
        if (willUpdated) {
          const res = await axios.put(
            `${api}/users`,
            { data: dataUser },
            getHeaderToken(),
          )
          dispatch(loadUser())
          setEditStatus(false)

          swal(res.data, {
            icon: "success",
          }).catch(
            error =>
              swal({
                title: "Error!",
                text: "An error has occurred",
                icon: "error",
              }),
            console.log(error),
          )
        } else {
          swal("Your profile data is safe!")
        }
      })
    } else {
      swal({
        title: "Error!",
        text: "Complete all form",
        icon: "error",
      })
    }
  }

  useEffect(() => {
    setDataUser(user)
  }, [user])

  return (
    <SubMenu>
      <FullName>
        {dataUser.name ? `${dataUser.name} ${dataUser.lastname}` : "Name"}
      </FullName>
      <InfoContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}>
          {editStatus ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <ButtonEdit bgColor={false} onClick={sendDataEdit}>
                Save
              </ButtonEdit>
              <ButtonEdit bgColor={true} onClick={cancelEditData}>
                Cancel
              </ButtonEdit>
            </div>
          ) : (
            <ButtonEdit
              bgColor={false}
              onClick={() => {
                setEditStatus(true)
              }}>
              Edit Profile
            </ButtonEdit>
          )}
        </div>
        <ContainerLabel>
          <Label>Name</Label>
          {user.name && editStatus ? (
            <Info>
              <input
                type="text"
                name="name"
                value={dataUser.name}
                onChange={handleChangeInfo}
                autoFocus
              />
            </Info>
          ) : (
            <Info>{user.name ? user.name : "Incomplete"}</Info>
          )}
        </ContainerLabel>
        <ContainerLabel>
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
        </ContainerLabel>
        <ContainerLabel>
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
        </ContainerLabel>
        <ContainerLabel>
          <Label>Email</Label>

          <Info>{user.email ? user.email : "Incomplete"}</Info>
        </ContainerLabel>
        <ContainerLabel>
          <Label>Account number</Label>
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
        </ContainerLabel>
      </InfoContainer>
    </SubMenu>
  )
}
