import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { blockUser, changeEnableUser, createAdmin } from "../../redux/actions"
import getHeaderToken from "../../utilities/getHeadertoken"
import styles from "../ForgotPassword/styles.module.css"
const api = import.meta.env.VITE_APP_API_URL
import CircularProgress from "@mui/material/CircularProgress"
import { toast } from "react-toastify"
import { ErrorAlert, SuccessAlert, WarningAlert } from "../../utilities/alerts"

const SubFormPromoteUser = ({ userId }) => {
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleChange = e => {
    setPassword(e.target.value)
  }

  const handlePromoteAdmin = async e => {
    e.preventDefault()

    // PUT /users/enable/:id
    try {
      if (!password) return WarningAlert("Complete password field")
      await axios.put(
        `${api}/users/promote-admin/${userId}`,
        { password },
        getHeaderToken(),
      )
      // console.log({ data })
      setPassword("")
      SuccessAlert(`New admin created`)
      dispatch(createAdmin(userId))
    } catch (error) {
      console.log({ error: error.response?.data })
      ErrorAlert("Something went wrong :(")
    }
  }

  return (
    <form
      onSubmit={handlePromoteAdmin}
      className={styles.form}
      style={{ width: "80%", margin: "auto" }}>
      <label>Your admin password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button style={{ backgroundColor: "#a94442", width: "50%" }}>
        Accept
      </button>
    </form>
  )
}

const FormUser = () => {
  const users = useSelector(state => state.admin.users)
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [option, setOption] = useState(null)
  const dispatch = useDispatch()

  const handleChange = e => {
    const { value } = e.target

    if (value === option) {
      return setOption(null)
    }

    setOption(value)
  }

  const handleResetPassword = async e => {
    e.preventDefault()

    // POST /emails
    try {
      const { data } = await axios.post(`${api}/users/forgot-password`, {
        email: user.email,
      })
      SuccessAlert("Password changed successfully, it will be sent to email's user")
      // console.log({ data })
    } catch (error) {
      console.log({ error: error.response?.data })
      ErrorAlert("Something went wrong :(")
    }
  }

  const handleBlockUser = async e => {
    e.preventDefault()

    // PUT /users/block/:id
    try {
      const { data } = await axios.put(
        `${api}/users/${user.blocked ? "unlock" : "block"}/${user.id}`,
        {},
        getHeaderToken(),
      )
      // console.log({ data })
      dispatch(blockUser(user.id, !user.blocked))
      SuccessAlert(`${user.blocked ? "User unlocked" : "User blocked"} correctly`)
    } catch (error) {
      console.log({ error: error.response?.data })
      ErrorAlert("Something went wrong :(")
    }
  }

  const handleChangeEnable = async e => {
    e.preventDefault()

    // PUT /users/enable/:id
    try {
      const { data } = await axios.put(
        `${api}/users/enable/${user.id}`,
        { status: user.status === "disabled" ? "enabled" : "disabled" },
        getHeaderToken(),
      )
      // console.log({ data })
      dispatch(
        changeEnableUser(
          user.id,
          user.status === "disabled" ? "enabled" : "disabled",
        ),
      )
      SuccessAlert(
        `${
          user.status === "disabled" ? "User enable" : "User disable"
        } correctly`,
      )
    } catch (error) {
      console.log({ error: error.response?.data })
      ErrorAlert("Something went wrong :(")
    }
  }

  useEffect(() => {
    if (id) {
      const selectedUser =
        users?.find(user => user.id + "" === id + "") || false
      setUser(selectedUser)
    }
  }, [id, users])

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>User actions</h3>
      <div className={styles.form}>
        {user !== null ? (
          user !== false ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "90%",
              }}>
              <img
                style={{
                  maxWidth: "150px",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
                src={user.photo}
                alt={user.name}
              />
              <div>
                <label>Fullname</label>
                <h3>
                  {user.name} {user.lastname}
                </h3>
                <label>Country</label>
                <p>{user.country}</p>
                <label>Email</label>
                <p>{user.email}</p>
              </div>
            </div>
          ) : (
            <div>User not found</div>
          )
        ) : (
          <div style={{display: "flex"}}><CircularProgress /></div>
        )}
        {user?.type !== "ADMIN" ? (
          <>
            <label>¿What do you want to do with this user?</label>
            {user?.type !== "SUBADMIN" && (
              <>
                <button value={"admin"} onClick={handleChange}>
                  Promote to admin
                </button>
                {option === "admin" && <SubFormPromoteUser userId={user.id} />}
              </>
            )}
            <button value={"block"} onClick={handleBlockUser}>
              {user?.blocked ? "Unlock" : "Block"} user
            </button>
            <button value={"disable"} onClick={handleChangeEnable}>
              {user?.status === "disabled" ? "Enable" : "Disable"} user
            </button>
            <button value={"reset"} onClick={handleResetPassword}>
              Reset user password
            </button>
          </>
        ) : (
          <div
            style={{ margin: "1rem", textAlign: "center", fontWeight: "bold" }}>
            This user is ADMIN!
          </div>
        )}
      </div>
    </div>
  )
}

export default FormUser
