import React, { useState } from "react"
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"
import styles from "./Calendar.module.css"

export default function Calendar(props) {
  const [dates, setDates] = useState({
    from: undefined,
    to: undefined,
  })
  function handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, dates)
    setDates(range)
  }
  function handleResetClick() {
    setDates({
      from: undefined,
      to: undefined,
    })
  }
  const modifiers = { start: dates.from, end: dates.to }
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
    } else {
      console.log("falta poner fechas")
    }
  }

  return (
    <div className={styles.RangeExample}>
      <p>
        {!dates.from && !dates.to && "Please select the first day."}
        {dates.from && !dates.to && "Please select the last day."}
        {dates.from &&
          dates.to &&
          `Selected from ${dates.from.toLocaleDateString()} to
            ${dates.to.toLocaleDateString()}`}{" "}
        {dates.from && dates.to && (
          <button className={styles.link} onClick={handleResetClick}>
            Reset
          </button>
        )}
      </p>
      <DayPicker
        className={styles.Selectable}
        numberOfMonths={2}
        selectedDays={[dates.from, dates]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      {restaFechas(dates.from, dates.to) >= 1 ? (
        <h3 className={styles.Total}>
          El total es: {restaFechas(dates.from, dates.to) * props.props.price}$
        </h3>
      ) : (
        ""
      )}
    </div>
  )
}
