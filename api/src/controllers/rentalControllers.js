const { Property_rental } = require("../db/index.js")

const addRental = async (req, res) => {
  const {
    userID,
    propertyID,
    final_price,
    statusPropertyId,
    rental_dates,
    start_date,
    final_date,
  } = req.body
  if (userID) {
    const newRental = await Property_rental.create({
      userID,
      propertyID,
      final_price,
      statusPropertyId,
      rental_dates,
      start_date,
      final_date,
    })
    if (newRental) {
      res.status(201).json({ message: "Created new rental", data: newRental })
    } else {
      res.status(500).json({ message: "Rental not Created" })
    }
  } else {
    res.status(404).json({ message: "Error Required Field not Found" })
  }
}

module.exports = {
  addRental,
}
