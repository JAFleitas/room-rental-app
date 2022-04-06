import axios from "axios"
import React, { useState } from "react"
import styles from "../ForgotPassword/styles.module.css"
import { WarningAlert, SuccessAlert, ErrorAlert } from "../../utilities/alerts"
import { getAllCategories } from "../../redux/actions"
import { useDispatch } from "react-redux"
const api = import.meta.env.VITE_APP_API_URL

const FormCategories = ({ show }) => {
  const [name, setName] = useState("")
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target

    setName(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!name) return WarningAlert("Complete name field")
    if(name.length < 5) return WarningAlert("Category name must be at least 5 characters")
    try {
      await axios.post(`${api}/categories`, {
        name,
      })
      setName("")
      SuccessAlert("Category created succesfully")
      dispatch(getAllCategories())
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
      <h3 className={styles.title} style={{fontSize: "16px"}}>Create a new category</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Category name</label>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Cabain, house, etc"
        />
        <button>Create category</button>
      </form>
    </div>
  )
}

export default FormCategories
