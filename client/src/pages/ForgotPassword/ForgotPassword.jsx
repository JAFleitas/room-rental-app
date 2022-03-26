import axios from 'axios';
import React, { useState } from 'react';
import styles from "./styles.module.css";
const api = import.meta.env.VITE_APP_API_URL

const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const {value} = e.target;

    setEmail(value);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(!email) return alert("Complete email field");
    try {
      await axios.post(`${api}/users/forgot-password`, {
        email,
      })
      alert("Check your email")
    } catch (error) {
      alert(
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
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email address"
        />
        <button>Reset password</button>
      </form>
    </div>
  )
}

export default Forgotpassword;
