import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios"
const api = import.meta.env.VITE_APP_API_URL
import getHeaderToken from "../../../utilities/getHeadertoken"
import { InputSubmit } from "../paypalButton/styles"
import swal from "sweetalert"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Form_Stripe = () => {
  const stripe = useStripe()
  const elements = useElements()
  const form = useSelector(state => state.formRentalProperty)
  const navigate = useNavigate()
  const [loadingPay, setLoadingPay] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoadingPay(true)
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
          }).then(() => {
            setLoadingPay(false)
            navigate("/")
          })
        } else {
          swal({
            title: "Error!",
            text: data.message,
            icon: "error",
            dangerMode: true,
          })
          setLoadingPay(false)
        }
      } catch (error) {
        swal({
          title: "Error!",
          text: "An error has occurred",
          icon: "error",
          dangerMode: true,
        })
        setLoadingPay(false)
      }
    } else {
      swal({
        title: "Error!",
        text: "Please, check the entered data",
        icon: "error",
        dangerMode: true,
      })
      setLoadingPay(false)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        {loadingPay === false ? (
          <InputSubmit>
            <input type="submit" value="Pay Now" />
          </InputSubmit>
        ) : null}
      </form>
      {loadingPay ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
            style={{ width: "130px", height: "130px" }}
          />
        </div>
      ) : null}
    </>
  )
}

export default Form_Stripe
