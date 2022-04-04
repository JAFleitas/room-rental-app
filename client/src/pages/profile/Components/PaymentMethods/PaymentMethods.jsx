import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import Creditcard from "../../../../components/CreditCard/CreditCard"
import { deletePaymentMethod, getAllPaymentMethod } from "../../../../redux/actions"
import { ErrorAlert } from "../../../../utilities/alerts"
import getHeaderToken from "../../../../utilities/getHeadertoken"
import styles from "./styles.module.css"
const api = import.meta.env.VITE_APP_API_URL

const Paymentmethods = () => {
  const methods = useSelector(state => state.paymenthMethods)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPaymentMethod())
  }, [dispatch])
  const deleteMethod = async id => {
    try {
      await axios.delete(`${api}/payment-method/${id}`, getHeaderToken())
      dispatch(deletePaymentMethod(id))
      // navigate("/profile/payment-methods")
      // return
    } catch (error) {
      console.log(error.response)
      ErrorAlert(
        (typeof error?.response?.data === "string"
          ? error.response.data
          : error.response.data?.message) || "Something went wrong :(",
      )
    }
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.title}>Payment methods</h2>
      {methods.length > 0 ? (
        methods.map(method => (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={method.id}>
            <Creditcard
              isVisa={method?.type === "VISA"}
              cardNumber={
                "**** **** **** " +
                method?.cardNumber.substring(method?.cardNumber.length - 4,)
              }
              fullName={method?.fullName}
              expirationMonth={method?.expirationMonth}
              expirationYear={method?.expirationYear}
              ccv={"***"}
              staticData={true}
            />
            <div className={styles.containerButtons}>
              <Link
                className={styles["btn-edit"]}
                to={`/edit/payment-method/${method.id}`}>
                Edit
              </Link>
              <button
                onClick={() => deleteMethod(method.id)}
                className={styles["btn-delete"]}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Aún no ha agregado metodos de pago</p>
        </div>
      )}
      <Link className={styles.btn} to="/add/payment-method">
        Add payment method
      </Link>
    </div>
  )
}

export default Paymentmethods
