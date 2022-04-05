import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import EmailIcon from "@mui/icons-material/Email"
import PeopleIcon from "@mui/icons-material/People"
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork"
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService"
import PaidIcon from "@mui/icons-material/Paid"

const Index = () => {
  const user = useSelector(state => state.user)
  const state = useSelector(state => state)
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={styles["index-title"]}>
        Hi! {user.name} {user.lastname}, wellcome to your admin dashboard
      </h1>
      <div className={styles["card-container"]}>
        <div
          onClick={() => navigate("/dashboard/emails")}
          className={styles.card}
          style={{ backgroundColor: "rgb(238, 115, 136)" }}>
          <EmailIcon fontSize="large" />
          <p>{state?.admin?.emails?.length || 0} promotional emails sent</p>
        </div>
        <div
          onClick={() => navigate("/dashboard/users")}
          className={styles.card}
          style={{ backgroundColor: "violet" }}>
          <PeopleIcon fontSize="large" />
          <p>{state?.admin?.users?.length || 0} registered users</p>
        </div>
        <div
          onClick={() => navigate("/dashboard/categories")}
          className={styles.card}
          style={{ backgroundColor: "deepskyblue" }}>
          <MapsHomeWorkIcon fontSize="large" />
          <p>{state?.categories?.length || 0} property categories</p>
        </div>
        <div
          onClick={() => navigate("/dashboard/services")}
          className={styles.card}
          style={{ backgroundColor: "rgb(244, 159, 150)" }}>
          <HomeRepairServiceIcon fontSize="large" />
          <p>{state?.services?.length || 0} property services</p>
        </div>
        <div
          onClick={() => navigate("/dashboard/rentals")}
          className={styles.card}>
          <PaidIcon fontSize="large" />
          <p>{state?.admin?.orders?.length || 0} rented properties</p>
        </div>
      </div>
    </div>
  )
}

export default Index
