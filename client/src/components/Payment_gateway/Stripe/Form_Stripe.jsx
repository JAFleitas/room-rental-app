import React from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios"
const api = import.meta.env.VITE_APP_API_URL
import getHeaderToken from "../../../utilities/getHeadertoken"
import { InputSubmit } from "../paypalButton/styles"
import swal from "sweetalert"
import { useSelector } from "react-redux"

const Form_Stripe = () => {
  const stripe = useStripe()
  const elements = useElements()
  const form = useSelector(state => state.formRentalProperty)

  const handleSubmit = async e => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    if (!error && form !== null) {
      const { id } = paymentMethod
      //El amount está en centavos, así que debe multiplicarce por 10
      form.idPayment = id
      try {
        const { data } = await axios.post(
          `${api}/payment-method/paymentStripe`,
          form,
          getHeaderToken(),
        )

        if (data.title === "success") {
          swal({
            title: "Success",
            text: data.message,
            icon: "success",
          })
        } else {
          swal({
            title: "Error!",
            text: data.message,
            icon: "error",
            dangerMode: true,
          })
        }
      } catch (error) {
        swal({
          title: "Error!",
          text: "An error has occurred",
          icon: "error",
          dangerMode: true,
        })
      }
    } else {
      swal({
        title: "Error!",
        text: "Please, check the entered data",
        icon: "error",
        dangerMode: true,
      })
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <InputSubmit>
          <input type="submit" />
        </InputSubmit>
      </form>
    </>
  )
}

export default Form_Stripe
