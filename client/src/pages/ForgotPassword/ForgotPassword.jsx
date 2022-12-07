import axios from "axios"
import React, { useState } from "react"
import styles from "./styles.module.css"
import { ToastContainer } from "react-toastify"
import { WarningAlert, SuccessAlert, ErrorAlert } from "../../utilities/alerts"
const api = import.meta.env.VITE_APP_API_URL

const Forgotpassword = () => {
  const [email, setEmail] = useState("")

  const handleChange = e => {
    const { value } = e.target

    setEmail(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!email) return WarningAlert("Complete email field")
    try {
      await axios.post(`${api}/users/forgot-password`, {
        email,
      })
      setEmail("")
      SuccessAlert("Check your email")
    } catch (error) {
      ErrorAlert(
        (typeof error?.response?.data === "string"
          ? error.response.data
          : error.response.data?.message) || "Something went wrong :(",
      )
    }
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Did you forget your password?</h3>
      <p>Don't worry, we will send you a temporary password to your email.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Insert you email..."
        />
        <button>Reset password</button>
      </form>
      <ToastContainer limit={3} />
    </div>
  )
}

export default Forgotpassword
