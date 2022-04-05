import React, { useState } from "react"
import CardStripe from "./Stripe/CardStripe"
import PayPalPay from "./paypalButton/paypal"
import { ButtonPayment, PaymentContainer } from "./paypalButton/styles"

export const Payment = () => {
  const [typePayment, setTypePayment] = useState("")

  return (
    <PaymentContainer>
      <h2 style={{ fontSize: "2rem" }}>
        {typePayment === "" ? "Select Type Payment" : typePayment}
      </h2>
      <br />
      {typePayment === "PayPal" ? (
        <PayPalPay />
      ) : (
        typePayment === "Stripe" && <CardStripe />
      )}
      {typePayment === "" ? (
        <>
          <ButtonPayment onClick={() => setTypePayment("PayPal")}>
            <img
              src="https://fexlaw.com/wp-content/uploads/2021/04/paypal-logo.png"
              alt="_PayPal"
            />
          </ButtonPayment>
          <ButtonPayment onClick={() => setTypePayment("Stripe")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvQ4bb-RqtkuIjse7PQ5pUDS12-Cj-8BHTWmE2Ne9rls7iwzjvawRug41u4Ud2T1OBZo&usqp=CAU"
              alt="_Stripe"
            />
          </ButtonPayment>
        </>
      ) : (
        <ButtonPayment onClick={() => setTypePayment("")}>
          <p>Return</p>
        </ButtonPayment>
      )}
    </PaymentContainer>
  )
}
