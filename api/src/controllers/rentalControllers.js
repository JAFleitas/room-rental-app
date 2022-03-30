const { PropertyRental, Property, User } = require("../db/index.js")

const addRental = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date, paymenthMethodId } =
    req.body
  if (userID && final_price && final_date && start_date && paymenthMethodId) {
    if (userID) {
      const newRental = await PropertyRental.create({
        userId: userID,
        propertyID,
        final_price,
        start_date,
        final_date,
        paymenthMethodId,
      })
      console.log(newRental)

      if (newRental) {
        res.status(201).json({ message: "Created new rental", data: newRental })
      } else {
        res.status(500).json({ message: "Rental not Created" })
      }
    } else {
      res.status(404).json({ message: "Error Required Field not Found" })
    }
  }
}

const getRental = async (req, res) => {
  const { propertyID } = req.body
  if (propertyID) {
    const Rentals = await PropertyRental.findAll({
      where: {
        propertyID: propertyID,
      },
    })
    if (Rentals) {
      res.status(201).json({ data: Rentals })
    } else {
      res.status(500).json({ message: "Rental not Send" })
    }
  } else {
    res.status(404).json({ message: "Error Required Field not Found" })
  }
}
const getAllRentals = async (req, res, next) => {
  try {
    const rentals = await PropertyRental.findAll()

    res.json(rentals)
  } catch (error) {
    next(error)
  }
}

const getRentalsByUser = async (req, res) => {
  const userID = req.user.id
  if (userID) {
    const Rentals = await PropertyRental.findAll({
      where: {
        userId: userID,
      },
      include: [
        {
          model: Property,
        },
        // {
        //   model: User,
        // },
      ],
    })
    console.log("Las rentas del usuario son: ")
    console.log(Rentals)
    console.log(userID)

    if (Rentals) {
      res.status(201).json({ data: Rentals })
    } else {
      res
        .status(500)
        .json({ message: "There are not any rentals for this User" })
    }
  } else {
    res.status(404).json({ message: "Error Required Field not Found" })
  }
}

module.exports = {
  addRental,
  getRental,
  getRentalsByUser,
  getAllRentals,
}
