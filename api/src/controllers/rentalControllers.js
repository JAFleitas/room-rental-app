const { PropertyRental } = require("../db/index.js")

const addRental = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date, paymenthMethodId } =
    req.body
  if (userID) {
    const newRental = await PropertyRental.create({
      userID,
      propertyID,
      final_price,
      start_date,
      final_date,
      paymenthMethodId,
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
