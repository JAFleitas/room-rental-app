import React, { useEffect, useState } from "react"
import {
  Container,
  Header,
  Price,
  Stars,
  IconStar,
  Form,
  FormField,
  FormSelect,
  FormLabel,
  SubmitButton,
  PaymentMethodsContainer,
  PaymentMethod,
  PaymentMethodCheck,
  PaymentMethodName,
  AddPayment,
  IconPlus,
} from "./styled"

import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import styles from "./Calendar.module.css"
import {
  actionAddFormRentalProperty,
  getRental,
} from "../../redux/actions/index"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export default function RentForm(props) {
  const [monthsInCalendary, setMonthsInCalendary] = useState(2)
  const mediaqueryList = window.matchMedia("(min-width: 705px)")
  mediaqueryList.addListener(function (EventoMediaQueryList) {
    if (EventoMediaQueryList.matches) {
      setMonthsInCalendary(2)
    } else {
      setMonthsInCalendary(1)
    }
  })
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRental({ propertyID: id }))
  }, [dispatch])

  props = props.props

  const paymentMethods = useSelector(state => state.paymenthMethods)

  const rentals = useSelector(state => state.propertyRentals.data)

  const [dates, setDates] = useState({
    from: undefined,
    to: undefined,
  })

  const [payMethod, setPayMethod] = useState()

  function handleResetClick() {
    setDates({
      from: undefined,
      to: undefined,
    })
  }
  // Función para calcular los días transcurridos entre dos fechas
  function restaFechas(f1, f2) {
    if (f1 !== undefined && f2 !== undefined && f1 !== null && f2 !== null) {
      f1 = f1.toLocaleDateString()
      f2 = f2.toLocaleDateString()

      if (f1 !== undefined && f1 == f2) {
        return 1
      }

      var aFecha1 = f1.split("/")
      var aFecha2 = f2.split("/")
      var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0])
      var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0])
      var dif = fFecha2 - fFecha1
      var dias = Math.floor(dif / (1000 * 60 * 60 * 24))
      return dias
    }
    return
  }

  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  function handleClick() {
    const finalPrice = restaFechas(dates?.from, dates?.to) * props.price
    if (
      dates?.from === undefined ||
      dates?.to === undefined ||
      payMethod === undefined ||
      finalPrice === undefined
    ) {
      toast.warning("All fields are required")
    } else {
      let form = {
        propertyID: props.id,
        final_price: finalPrice,
        start_date: dates.from,
        final_date: dates.to,
        paymenthMethodId: payMethod,
      }
    }

    let form = {
      propertyID: props.id,
      final_price: finalPrice,
      start_date: dates.from,
      final_date: dates.to,
      paymenthMethodId: payMethod,
    }
    if (auth) {
      dispatch(actionAddFormRentalProperty(form))
      navigate("/pay-reservation", { scroll: { x: 0, y: 0 } })
    }
    if (!auth) {
      dispatch(actionAddFormRentalProperty(form))
      navigate("/login", { scroll: { x: 0, y: 0 } })
    }

    // setDiasOcupados([
    //   ...diasOcupados,
    //   { after: new Date(inicio), before: new Date(end) },
    // ])
  }

  function handlePayChange(id) {
    // console.log(id)
    setPayMethod(id)
  }

  return (
    <Container>
      <Header>
        <Price>{props.price ? props.price : "185"}$</Price>
        <Stars>
          <IconStar />
          {props.rating}
        </Stars>
      </Header>
      <Form>
        <FormField>
          <FormLabel>Travelers: </FormLabel>
          <FormSelect type="select">
            <option key="1">1</option>
            <option key="2">2</option>
            <option key="3">3</option>
            <option key="4">4</option>
            <option key="5">5</option>
            <option key="+5">+5</option>
          </FormSelect>
        </FormField>
        <FormField>
          <div className={styles.RangeExample}>
            <p>
              {!dates?.from && !dates?.to && "Please select the first day."}
              {dates?.from && !dates?.to && "Please select the last day."}
              {dates?.from &&
                dates?.to &&
                `Selected from ${dates?.from.toLocaleDateString()} to
            ${dates?.to.toLocaleDateString()}`}{" "}
              {dates?.from && dates?.to && (
                <button className={styles.link} onClick={handleResetClick}>
                  Reset
                </button>
              )}
            </p>

            <DayPicker
              defaultMonth={new Date()}
              numberOfMonths={monthsInCalendary}
              mode="range"
              selected={dates}
              onSelect={setDates}
              hidden={{
                from: new Date(2000, 5, 10),
                to: new Date(),
              }}
              disabled={
                rentals &&
                rentals.map(rental => {
                  return {
                    from: new Date(rental.start_date),
                    to: new Date(rental.final_date),
                  }
                })
              }
              modifiersClassNames={{
                selected: styles.Selectable,
                today: styles.today,
              }}
            />
            {restaFechas(dates?.from, dates?.to) >= 1 ? (
              <h3 className={styles.Total}>
                El total es: {restaFechas(dates?.from, dates?.to) * props.price}
                $
              </h3>
            ) : (
              ""
            )}
          </div>
        </FormField>
        <PaymentMethodsContainer>
          {paymentMethods ? (
            paymentMethods.map(method => {
              // console.log(method)
              return (
                <PaymentMethod key={method.id}>
                  <PaymentMethodName>
                    {method.type + " ending in " + method.lastNumbers}
                  </PaymentMethodName>
                  <PaymentMethodCheck
                    key={method.id}
                    type="radio"
                    name="paymenthmethod"
                    id={method.id}
                    value={method.id}
                    onChange={e => handlePayChange(e.target.id)}
                  />
                </PaymentMethod>
              )
            })
          ) : (
            <AddPayment to="/profile/payment-methods">
              Add payment method
            </AddPayment>
          )}
          <AddPayment to="/profile/payment-methods">
            Add payment method <IconPlus />
          </AddPayment>
        </PaymentMethodsContainer>
        <SubmitButton onClick={handleClick}>Reservar</SubmitButton>
      </Form>
    </Container>
  )
}

//Formato para deshabilitar dias
// ;[
//   {
//     after: new Date("2022,2,20"),
//     before: new Date("2022,2,25"),
//   },
// ]

{
  /* <PaymentMethod>
<PaymentMethodName>Card 1</PaymentMethodName>
<PaymentMethodCheck type="checkbox" />
</PaymentMethod>
<PaymentMethod>
<PaymentMethodName>Card 2</PaymentMethodName>
<PaymentMethodCheck type="checkbox" />
</PaymentMethod>
<PaymentMethod>
<PaymentMethodName>Card 3</PaymentMethodName>
<PaymentMethodCheck type="checkbox" />
</PaymentMethod> */
}
