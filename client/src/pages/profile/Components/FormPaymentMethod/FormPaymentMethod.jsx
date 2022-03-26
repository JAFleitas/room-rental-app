import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { GrClose } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux"
import Creditcard from "../../../../components/CreditCard/CreditCard"
import axios from "axios"
import getHeaderToken from "../../../../utilities/getHeadertoken"
const api = import.meta.env.VITE_APP_API_URL
import { useNavigate, useParams } from "react-router-dom"
import { addPaymentMethod, editPaymentMethod } from "../../../../redux/actions"

const initialForm = {
  cardNumber: "",
  fullName: "",
  expirationMonth: "",
  expirationYear: "",
  ccv: "",
}

const FormPaymentMethod = ({ edit }) => {
  const [isVisa, setIsVisa] = useState(true)
  const [form, setForm] = useState(initialForm)
  const [openForm, setOpenForm] = useState(false)
  const [frontal, setFrontal] = useState(true)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const methods = useSelector(state => state.paymenthMethods)
  const { id } = useParams()

  const handleClickCard = () => {
    setFrontal(!frontal)
  }

  const handleClickButton = () => {
    setOpenForm(!openForm)
  }

  const validateForm = form => {
    const { cardNumber, fullName, expirationMonth, expirationYear, ccv } = form
    const errors = {}

    if (cardNumber[0] !== "4" && cardNumber[0] !== "5")
      errors.cardNumber = "Debe comenzar con 4 o 5"
    if (fullName.split(" ").length < 2)
      errors.fullName = "Debe contener mas de una palabra"

    if (!expirationMonth || !expirationYear || !ccv) {
      errors.general = "All fields are required"
    }

    return errors
  }

  const handleChange = e => {
    let { name, value } = e.target

    setFrontal(name !== "ccv")

    if (name === "cardNumber") {
      if (form.cardNumber[0] === "4") setIsVisa(true)
      else setIsVisa(false)
    }

    if (name === "cardNumber" || name === "ccv") {
      value = value
        .replace(/\s/g, "")
        // Eliminar las letras
        .replace(/\D/g, "")
    }

    if (name === "fullName") {
      value = value.replace(/[0-9]/g, "")
    }

    const newForm = { ...form, [name]: value }
    setForm(newForm)
    setErrors(validateForm(newForm))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const errors = validateForm(form)
    setErrors(errors)

    if (Object.keys(errors).length > 0) {
      alert("Check all fields")
    } else {
      if (edit) {
        try {
          await axios.put(
            `${api}/payment-method/${form.id}`,
            form,
            getHeaderToken(),
          )
          const { id, fullName, expirationMonth, expirationYear } = form
          dispatch(
            editPaymentMethod({
              id,
              fullName,
              expirationMonth,
              expirationYear,
              lastNumbers: form.cardNumber.substring(
                form.cardNumber.length - 4,
                form.cardNumber.length,
              ),
            }),
          )
          navigate("/profile/payment-methods")
          return
        } catch (error) {
          console.log(error?.response)
          alert(
            (typeof error?.response?.data === "string"
              ? error.response.data
              : error.response.data?.message) || "Something went wrong :(",
          )
        }
      } else {
        try {
          const { data } = await axios.post(
            `${api}/payment-method`,
            form,
            getHeaderToken(),
          )
          dispatch(addPaymentMethod(data))
          navigate("/profile/payment-methods")
          return
        } catch (error) {
          console.log(error?.response)
          alert(
            (typeof error?.response?.data === "string"
              ? error.response.data
              : error.response.data?.message) || "Something went wrong :(",
          )
        }
      }
    }
  }

  let currentYear = new Date().getFullYear()

  useEffect(() => {
    if (edit) {
      const finded = methods.find(method => method.id + "" === id)
      finded && setForm({ ...form, ...finded })
    }
  }, [edit])

  return (
    <div className={styles["contenedor"]}>
      <Creditcard
        isVisa={isVisa}
        frontal={frontal}
        handleClickCard={handleClickCard}
        cardNumber={form.cardNumber}
        fullName={form.fullName}
        expirationMonth={form.expirationMonth}
        expirationYear={form.expirationYear}
        ccv={form.ccv}
      />

      {/* <!-- Contenedor Boton Abrir Formulario --> */}
      <div className={styles["contenedor-btn"]}>
        <button
          onClick={handleClickButton}
          className={`${styles["btn-abrir-formulario"]} ${
            openForm && styles["active"]
          }`}
          id="btn-abrir-formulario">
          <GrClose />
        </button>
      </div>

      {/* <!-- Formulario --> */}
      <form
        onSubmit={handleSubmit}
        id="formulario-tarjeta"
        className={`${styles["formulario-tarjeta"]} ${
          openForm && styles["active"]
        }`}>
        <div className={styles["grupo"]}>
          <label htmlFor="inputNumero">Card Number</label>
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            type="text"
            maxLength="16"
            autoComplete="off"
            className={errors.cardNumber && form.cardNumber && styles.error}
          />
        </div>
        <div className={styles["grupo"]}>
          <label htmlFor="inputNombre">Fullname</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            type="text"
            maxLength="25"
            autoComplete="off"
            className={errors.fullName && form.fullName && styles.error}
          />
        </div>
        <div className={styles["flexbox"]}>
          <div className={styles["grupo expira"]}>
            <label htmlFor="selectMes">Expiration</label>
            <div className={styles["flexbox"]}>
              <div className={styles["grupo-select"]}>
                <select
                  className={
                    errors.expirationMonth &&
                    form.expirationMonth &&
                    styles.error
                  }
                  onChange={handleChange}
                  name="expirationMonth"
                  value={form.expirationMonth}>
                  <option value={""}>Month</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(month => (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles["grupo-select"]}>
                <select
                  className={
                    errors.expirationYear && form.expirationYear && styles.error
                  }
                  onChange={handleChange}
                  name="expirationYear"
                  value={form.expirationYear}>
                  <option value={""}>Year</option>
                  {[0, 1, 2, 3, 4, 5].map(year => (
                    <option
                      value={currentYear + year - 2000}
                      key={currentYear + year}>
                      {currentYear + year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles["grupo ccv"]}>
            <label htmlFor="inputCCV">CCV</label>
            <input
              type="text"
              value={form.ccv}
              onChange={handleChange}
              name="ccv"
              maxLength="3"
            />
          </div>
        </div>
        <button type="submit" className={styles["btn-enviar"]}>
          Save Payment Method
        </button>
      </form>
    </div>
  )
}

export default FormPaymentMethod
