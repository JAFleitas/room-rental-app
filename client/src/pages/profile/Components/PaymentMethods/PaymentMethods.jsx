import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Creditcard from "../../../../components/CreditCard/CreditCard"
import styles from "./styles.module.css";

const Paymentmethods = () => {
  const methods = useSelector(state => state.paymenthMethods)

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.title}>Payment methods</h2>
      {methods.length > 0 ? (
        methods.map(method => (
          <Creditcard
            key={method.id}
            isVisa={method?.type === "VISA"}
            cardNumber={"**** **** **** " + method?.lastNumbers}
            fullName={method?.fullName}
            expirationMonth={method?.expirationMonth}
            expirationYear={method?.expirationYear}
            ccv={method?.ccv}
            staticData={true}
          />
        ))
      ) : (
        <div>
          <p>Aún no ha agregado metodos de pago</p>
        </div>
      )}
      <Link className={styles.btn} to="/add/payment-method">Add payment method</Link>
    </div>
  )
}

export default Paymentmethods
