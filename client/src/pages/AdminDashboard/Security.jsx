import React, { useState } from "react"
import styles from "../ForgotPassword/styles.module.css"
import { useDispatch } from "react-redux"
import { changePassword } from "../../redux/actions";
import { WarningAlert } from "../../utilities/alerts";

const initialForm = {
  newPassword: "",
  oldPassword: "",
  confirmPassword: "",
}

const Security = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target

    const newForm = { ...form, [name]: value };
    setForm(newForm)

    setErrors(validateForm(newForm));
  }

  const validateForm = (form) => {
    const newErrors = {}

    if (!form.oldPassword) newErrors.oldPassword = "Old password is required"
    if (!form.newPassword) newErrors.newPassword = "New password is required"
    if (form.newPassword !== form.confirmPassword)
      newErrors.confirmPassword = "Confirmation password dont match"

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = validateForm(form);
    if (Object.keys(newErrors).length === 0) {
      dispatch(changePassword(form))
      setForm(initialForm)
    } else {
      console.table(newErrors);
      WarningAlert("Check your fields")
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Change password</h3>
      <br />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Your current password</label>
        <input
          type="password"
          name="oldPassword"
          value={form.oldPassword}
          onChange={handleChange}
        />
        {errors.oldPassword && (
          <span style={{ color: "red", fontSize: "10px", paddingLeft: "10px" }}>
            {errors.oldPassword}
          </span>
        )}
        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
        />
        {errors.newPassword && (
          <span style={{ color: "red", fontSize: "10px", paddingLeft: "10px" }}>
            {errors.newPassword}
          </span>
        )}
        <label>Confirm new Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red", fontSize: "10px", paddingLeft: "10px" }}>
            {errors.confirmPassword}
          </span>
        )}
        <button>Change password</button>
      </form>
    </div>
  )
}

export default Security
