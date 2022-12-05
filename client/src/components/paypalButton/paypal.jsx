import { useDispatch, useSelector } from "react-redux"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"
import { actionAddFormRentalProperty, addRental } from "../../redux/actions"
import { useEffect, useState } from "react"
import swal from "sweetalert"
import { ContainerPage, PaypalContainer } from "./styles"
import Error404 from "../../pages/404/Error404"
import { toast } from "react-toastify"
import { ErrorAlert } from "../../utilities/alerts"

export default function PayPalPay() {
  const clientID = import.meta.env.VITE_APP_CLIENT_ID_PAYPAL
  const form = useSelector(state => state.formRentalProperty)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState(null)
  useEffect(() => {
    if (status) {
      dispatch(addRental(form))
      swal({
        title: "Successful booking!",
        text: "Thanks for using Rentals App",
        icon: "success",
        button: "Close",
        timer: "3000",
      }).then(() => {
        dispatch(actionAddFormRentalProperty(null))
        navigate("/")
      })
    }
  }, [status])

  return form?.final_price ? (
    <ContainerPage>
      <PayPalScriptProvider options={{ "client-id": clientID }}>
        <PaypalContainer>
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
                ErrorAlert(err)
                navigate("/")
              }
            }}
            style={{ layout: "vertical" }}
          />
        </PaypalContainer>
      </PayPalScriptProvider>
    </ContainerPage>
  ) : (
    <Error404 />
  )
}
