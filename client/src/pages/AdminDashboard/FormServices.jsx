import axios from "axios"
import React, { useState } from "react"
import styles from "../ForgotPassword/styles.module.css"
import { WarningAlert, SuccessAlert, ErrorAlert } from "../../utilities/alerts"
import { getAllServices } from "../../redux/actions"
import { useDispatch } from "react-redux"
const api = import.meta.env.VITE_APP_API_URL

const FormServices = ({ show }) => {
  const [name, setName] = useState("")
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target

    setName(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!name) return WarningAlert("Complete name field")
    if(name.length < 3) return WarningAlert("Service name must be at least 3 characters")
    try {
      await axios.post(`${api}/services`, {
        name,
      })
      setName("")
      SuccessAlert("Service created succesfully")
      dispatch(getAllServices())
    } catch (error) {
      ErrorAlert(
        (typeof error?.response?.data === "string"
          ? error.response.data
          : error.response.data?.message) || "Something went wrong :(",
      )
    }
  }

  return (
    <div className={styles.container} style={{ display: show ? "" : "none" }}>
      <h3 className={styles.title} style={{fontSize: "16px"}}>Create a new service</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Service name</label>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Wifi, pets, etc"
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default FormServices
