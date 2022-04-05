import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Form_Stripe from "./Form_Stripe"

const REACT_KEY_STRIPE = import.meta.env.VITE_PUBLIC_API_KEY_STRIPE

const stripePromise = loadStripe(REACT_KEY_STRIPE)

const CardStripe = () => {
  const imgCreditCard =
    "https://www.viabcp.com/wcm/connect/a3ae4393-4e61-4c7f-b9d7-803f7797d0dd/BCP_Transformers.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a3ae4393-4e61-4c7f-b9d7-803f7797d0dd-mYBiz7o"
  return (
    <div>
      <Elements stripe={stripePromise}>
        <div>
          <img src={imgCreditCard} />
          <Form_Stripe />
        </div>
      </Elements>
    </div>
  )
}

export default CardStripe
