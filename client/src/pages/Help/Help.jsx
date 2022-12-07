import axios from "axios"
import React, { useState } from "react"
import { ErrorAlert, SuccessAlert, WarningAlert } from "../../utilities/alerts"
import styles from "../ForgotPassword/styles.module.css"
const api = import.meta.env.VITE_APP_API_URL
import { ToastContainer } from "react-toastify"

const initialForm = {
  email: "",
  subject: "",
  message: "",
}

const Help = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, subject, message } = form

    if (!email || !subject || !message) {
      WarningAlert("Complete all fields")
    } else {
      try {
        await axios.post(`${api}/email`, {
          email,
          subject,
          message,
        })
        setForm(initialForm)
        SuccessAlert(
          "The email has been sent correctly, we will contact you in the next 72 hours",
        )
      } catch (error) {
        ErrorAlert(
          (typeof error?.response?.data === "string"
            ? error.response.data
            : error.response.data?.message) || "Something went wrong :(",
        )
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Help</h1>
      <p>
        If you have a problem with our application and you cannot solve it on
        your own, you can contact our support. We will be happy to help you
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}></textarea>
        <button>Send email</button>
      </form>
      <ToastContainer limit={3} />
    </div>
  )
}

export default Help
