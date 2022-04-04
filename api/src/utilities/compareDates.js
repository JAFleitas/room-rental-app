function compareDates(
  reservedDateStart,
  reservedDateFinal,
  searchedDateStart,
  searchedDateFinal,
) {
  if (new Date(searchedDateStart).getTime() < new Date().getTime()) {
    return false
  }
  if (
    new Date(reservedDateStart).getTime() >
      new Date(searchedDateStart).getTime() &&
    new Date(reservedDateStart).getTime() >
      new Date(searchedDateFinal).getTime()
  ) {
    return true
  }
  if (
    new Date(reservedDateFinal).getTime() <
      new Date(searchedDateStart).getTime() &&
    new Date(reservedDateFinal).getTime() <
      new Date(searchedDateFinal).getTime()
  ) {
    return true
  } else {
    return false
  }
}

module.exports = { compareDates }
