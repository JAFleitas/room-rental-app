import React, { useState } from "react"
import styles from "../ForgotPassword/styles.module.css"
import Rating from "@mui/material/Rating"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import getHeaderToken from "../../utilities/getHeadertoken"
const api = import.meta.env.VITE_APP_API_URL

const FormComment = () => {
  const [message, setMessage] = useState("")
  const [stars, setStars] = useState(2.5)
  const { id: propertyId } = useParams()
  const navigate = useNavigate()
  
  const handleChangeMessage = e => {
    const { value } = e.target

    setMessage(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (message) {
      try {
        const comment = await axios.post(`${api}/comments`, {
          propertyId,
          rating: stars,
          message,
        },
        getHeaderToken())
        console.table(comment);
        setMessage("");
        alert("Comment saved succesfully");
        navigate("/profile/history");
      } catch (error) {
        alert(
          (typeof error?.response?.data === "string"
            ? error.response.data
            : error.response.data?.message) || "Something went wrong :(",
        )
      }
    } else {
      alert("Comment field is requierd")
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Add a comment of the rented property</h3>
      <Rating
        precision={0.5}
        name="half-rating"
        value={stars}
        onChange={(_, newValue) => {
          setStars(newValue)
        }}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Your comment</label>
        <textarea
          name="message"
          value={message}
          onChange={handleChangeMessage}></textarea>
        <button>Send comment</button>
      </form>
    </div>
  )
}

export default FormComment
