
/* eslint-disable */

const { PropertyRental, Property, User } = require("../db/index.js")


const addRental = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date } = req.body
  if (userID && final_price && final_date && start_date) {
    if (userID) {
      const newRental = await PropertyRental.create({
        userId: userID,
        propertyID,
        final_price,
        start_date,
        final_date,
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
        status: "active",
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

const cancelRental = async (req, res, next) => {
  const rentID = req.body.rentID
  console.log("rentID")
  console.log(req.body.rentID)
  console.log(rentID)

  try {
    // const Rental = await PropertyRental.findByPk(rentID)
    const Rental = await PropertyRental.findAll({
      where: {
        id: rentID,
      },
    })
    console.log(Rental[0])

    if (!Rental) {
      res.json({ status: 400, message: "This Rent doesnt exists" })
    }
    if (Rental[0].dataValues.status === "active") {
      Rental[0].update({
        status: "cancelled",
      })
      await Rental[0].save()

      // jane.set({
      //   name: "Ada",
      //   favoriteColor: "blue"
      // });
      // // As above, the database still has "Jane" and "green"
      // await jane.save();

      res.json({ status: 200, message: "This property has been cancelled " })
    } else if (Rental[0].dataValues.status === "cancelled") {
      res.json({ status: 400, message: "This property is already cancelled " })
    } else {
      res.json({ status: 400, message: "Error" })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addRental,
  getRental,
  getRentalsByUser,
  getAllRentals,
  cancelRental,
}
