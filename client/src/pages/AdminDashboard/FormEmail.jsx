import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import getHeaderToken from "../../utilities/getHeadertoken"
import styles from "../ForgotPassword/styles.module.css"
const api = import.meta.env.VITE_APP_API_URL

const initialForm = {
  subject: "",
  title: "",
  message: "",
  segment: "all",
  image: "",
}

const options = ["all", "blocked", "disabled", "hosts", "guests"]

const FormEmail = ({ resend = false }) => {
  const oldEmails = useSelector(state => state.admin.emails)
  const [form, setForm] = useState(initialForm)
  const { id } = useParams()

  const handleChange = e => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // POST /emails
    try {
      const { data } = await axios.post(`${api}/notifications`, form, getHeaderToken())
      console.log({data});
      setForm(initialForm);
    } catch (error) {
      console.log({ error: error.response?.data })
      alert("Something went wrong :(")
    }
  }

  useEffect(() => {
    if (resend) {
      const oldEmail = oldEmails.find(email => email.id + "" === id + "")
      setForm({ ...form, ...oldEmail })
    }
  }, [resend, oldEmails])

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create a new Promotional Email</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}></textarea>
        <label>Image</label>
        <input
          type="url"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <label>Segment</label>
        <select>
          {options.map(opt => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />
        <button>{resend ? "Resend" : "Send"} email</button>
      </form>
    </div>
  )
}

export default FormEmail
