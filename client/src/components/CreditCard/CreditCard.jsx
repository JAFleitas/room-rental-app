import React, { useState } from "react"
import visa from "../../assets/bg-tarjeta/logos/visa.png"
import mastercard from "../../assets/bg-tarjeta/logos/mastercard.png"
import chip from "../../assets/bg-tarjeta/chip-tarjeta.png"
import styles from "./styles.module.css"

const Creditcard = ({
  isVisa = true,
  frontal,
  handleClickCard,
  cardNumber = "",
  fullName = "",
  expirationMonth = "",
  expirationYear="",
  ccv="",
  staticData=false
}) => {
  const [activeFrontal, setActiveFrontal] = useState(true);

  const revertFrontal = () => {
    setActiveFrontal(!activeFrontal);
  }

  return (
    <section
      onClick={staticData ? revertFrontal : handleClickCard}
      className={`${styles["tarjeta"]} ${
        staticData
          ? !activeFrontal && styles["active"]
          : !frontal && styles["active"]
      }`}>
      <div className={styles["delantera"]}>
        <div className={styles["logo-marca"]}>
          <img src={isVisa ? visa : mastercard} alt="" />
        </div>
        <img src={chip} className={styles["chip"]} />
        <div className={styles["datos"]}>
          <div className={styles["grupo"]} id="numero">
            <p className={styles["label"]}>Card Number</p>
            <p className={styles["numero"]}>
              {cardNumber || "#### #### #### ####"}
            </p>
          </div>
          <div className={styles["flexbox"]}>
            <div className={styles["grupo"]} id="nombre">
              <p className={styles["label"]}>Fullname</p>
              <p className={styles["nombre"]}>{fullName || "Jhon Doe"}</p>
            </div>

            <div className={styles["grupo"]} id="expiracion">
              <p className={styles["label"]}>Expiration</p>
              <p className={styles["expiracion"]}>
                <span className={styles["mes"]}>{expirationMonth || "MM"}</span>{" "}
                /{" "}
                <span className={styles["year"]}>{expirationYear || "YY"}</span>
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
              <p>{fullName || ""}</p>
            </div>
          </div>
          <div className={`${styles["grupo"]} ${styles["id-ccv"]}`} id="ccv">
            <p className={styles["label"]}>CCV</p>
            <p className={styles["ccv"]}>{ccv || ""}</p>
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
  )
}

export default Creditcard;
