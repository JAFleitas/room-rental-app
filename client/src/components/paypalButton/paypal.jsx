import { useDispatch, useSelector } from "react-redux"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"
import { addRental } from "../../redux/actions"
import { useEffect, useState } from "react"

export default function PayPalPay() {
  const clientID = import.meta.env.VITE_APP_CLIENT_ID_PAYPAL
  const form = useSelector(state => state.formRentalProperty)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState(null)
  useEffect(() => {
    if (status) {
      dispatch(addRental(form))
      setStatus(null)
      alert("Successfully booked")
      navigate("/")
    }
  }, [status])

  return (
    <PayPalScriptProvider options={{ "client-id": clientID }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: form.final_price ?? null,
                },
              },
            ],
          })
        }}
        onApprove={async (data, actions) => {
          try {
            const res = await actions.order.capture()
            setStatus(res.status)
          } catch (err) {
            alert(err)
            navigate("/")
          }
        }}
        style={{ layout: "vertical" }}
      />
    </PayPalScriptProvider>
  )
}
