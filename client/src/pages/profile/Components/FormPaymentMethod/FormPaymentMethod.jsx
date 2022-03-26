import React, { useState } from "react"
import styles from "./styles.module.css";
import { GrClose } from "react-icons/gr";
import visa from "../../../../assets/bg-tarjeta/logos/visa.png";
import mastercard from "../../../../assets/bg-tarjeta/logos/mastercard.png";
import chip from "../../../../assets/bg-tarjeta/chip-tarjeta.png";
import { useDispatch } from "react-redux";

const initialForm = {
  cardNumber: "",
  fullName: "",
  expirationMonth: "",
  expirationYear: "",
  ccv: "",
}

const FormPaymentMethod = () => {
  const [frontal, setFrontal] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [openForm, setOpenForm] = useState(false);
  const [isVisa, setIsVisa] = useState(true);
  const dispatch = useDispatch();

  const handleClickCard = () => {
    setFrontal(!frontal);
  } 
  
  const handleClickButton = () => {
    setOpenForm(!openForm);
  } 

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFrontal(name !== "ccv");

    if(name === "cardNumber"){
      if(form.cardNumber[0] === "4") setIsVisa(true)
      else setIsVisa(false);
    }

    setForm({...form, [name]: value});
  }

  return (
    <div className={styles["contenedor"]}>
      <section
        onClick={handleClickCard}
        className={`${styles["tarjeta"]} ${!frontal && styles["active"]}`}>
        <div className={styles["delantera"]}>
          <div className={styles["logo-marca"]}>
            <img src={isVisa ? visa : mastercard} alt="" />
          </div>
          <img src={chip} className={styles["chip"]} />
          <div className={styles["datos"]}>
            <div className={styles["grupo"]} id="numero">
              <p className={styles["label"]}>Card Number</p>
              <p className={styles["numero"]}>#### #### #### ####</p>
            </div>
            <div className={styles["flexbox"]}>
              <div className={styles["grupo"]} id="nombre">
                <p className={styles["label"]}>Fullname</p>
                <p className={styles["nombre"]}>Jhon Doe</p>
              </div>

              <div className={styles["grupo"]} id="expiracion">
                <p className={styles["label"]}>Expiration</p>
                <p className={styles["expiracion"]}>
                  <span className={styles["mes"]}>MM</span> /{" "}
                  <span className={styles["year"]}>YY</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["trasera"]}>
          <div className={styles["barra-magnetica"]}></div>
          <div className={styles["datos"]}>
            <div
              className={`${styles["grupo"]} ${styles["id-firma"]}`}
              id="firma">
              <p className={styles["label"]}>Signature</p>
              <div className={styles["firma"]}>
                <p></p>
              </div>
            </div>
            <div className={`${styles["grupo"]} ${styles["id-ccv"]}`} id="ccv">
              <p className={styles["label"]}>CCV</p>
              <p className={styles["ccv"]}></p>
            </div>
          </div>
          <p className={styles["leyenda"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            exercitationem, voluptates illo.
          </p>
          <a href="#" className={styles["link-banco"]}>
            www.yourbank.com
          </a>
        </div>
      </section>

      {/* <!-- Contenedor Boton Abrir Formulario --> */}
      <div className={styles["contenedor-btn"]}>
        <button
          onClick={handleClickButton}
          className={`${styles["btn-abrir-formulario"]} ${openForm && styles["active"]}`}
          id="btn-abrir-formulario">
          <GrClose />
        </button>
      </div>

      {/* <!-- Formulario --> */}
      <form
        action=""
        id="formulario-tarjeta"
        className={`${styles["formulario-tarjeta"]} ${
          openForm && styles["active"]
        }`}>
        <div className={styles["grupo"]}>
          <label htmlFor="inputNumero">Card Number</label>
          <input
            type="text"
            id="inputNumero"
            maxLength="19"
            autoComplete="off"
          />
        </div>
        <div className={styles["grupo"]}>
          <label htmlFor="inputNombre">Fullname</label>
          <input
            type="text"
            id="inputNombre"
            maxLength="19"
            autoComplete="off"
          />
        </div>
        <div className={styles["flexbox"]}>
          <div className={styles["grupo expira"]}>
            <label htmlFor="selectMes">Expiration</label>
            <div className={styles["flexbox"]}>
              <div className={styles["grupo-select"]}>
                <select name="mes" id="selectMes">
                  <option disabled selected>
                    Month
                  </option>
                </select>
                <i className={styles["fas fa-angle-down"]}></i>
              </div>
              <div className={styles["grupo-select"]}>
                <select name="year" id="selectYear">
                  <option disabled selected>
                    Year
                  </option>
                </select>
                <i className={styles["fas fa-angle-down"]}></i>
              </div>
            </div>
          </div>

          <div className={styles["grupo ccv"]}>
            <label htmlFor="inputCCV">CCV</label>
            <input type="text" id="inputCCV" maxLength="3" />
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
