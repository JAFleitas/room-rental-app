/* eslint-disable */

const { sendEmail } = require("../utilities/sendEmail.js")
const { PropertyRental, Property, User, sequelize } = require("../db/index.js")

const addRental = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date } = req.body
  if (userID && final_price && final_date && start_date) {
    if (userID) {
      const newRental = await PropertyRental.create({
        userID,
        propertyID,
        final_price,
        start_date,
        final_date,
      })

      if (newRental) {
        try {
          const guest = await User.findByPk(userID)
          const host = await Property.findOne({
            where: { id: propertyID },
            include: [{ model: User }],
          })

          // console.log({ guest, host })
          const htmlGuest = `<h2 style="text-align: center; color: rgb(139, 37, 255);">Renta exitosa</h2>
          <div style="text-align: justify; padding: 7px;">
            <p style="width: 90%; margin: 1rem auto;">Se ha registrado tu renta de forma exitosa! Disfruta tu estancia <3</p>
            <p>Si necesitas más información del usuario hospedador, puedes comunicarte a su email ${host.dataValues.user.email}</p>
          </div>
          <div>
            <a href="https://room-rental-app.vercel.app" style="background: rgb(139, 37, 255); border-radius: 12px; padding: 10px; color: white;text-decoration: none; display: block; width: 70px; text-align: center; margin: 1rem auto;">Ver en app</a>
          </div> `

          const htmlHost = `<h2 style="text-align: center; color: rgb(139, 37, 255);">Enhorabuena! Alguien ha rentado tu propiedad</h2>
          <div style="text-align: justify; padding: 7px;">
            <p style="width: 90%; margin: 1rem auto;">Tu propiedad ${host.dataValues.name} ha sido rentada desde el ${start_date} hasta el ${final_date}! Si necesitas más información del usuario que la ha rentado puedes comunicarte a su email ${guest.dataValues.email}</p>
          </div>
          <div>
            <a href="https://room-rental-app.vercel.app" style="background: rgb(139, 37, 255); border-radius: 12px; padding: 10px; color: white;text-decoration: none; display: block; width: 70px; text-align: center; margin: 1rem auto;">Ver en app</a>
          </div> `

          await sendEmail(
            "Alguien rentó tu propiedad!",
            false,
            false,
            host.dataValues.user.email,
            htmlHost,
          )

          await sendEmail(
            "Has rentado una propiedad",
            false,
            false,
            guest.dataValues.email,
            htmlGuest,
          )
        } catch (error) {
          console.log(error)
        }

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
        status: "active",
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
    const rentals = await PropertyRental.findAll({
      include: [{ model: User }, { model: Property }],
    })
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
        userID,
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
    // console.log("Las rentas del usuario son: ")
    // console.log(Rentals)
    // console.log(userID)

    if (Rentals) {
      res.status(201).json(Rentals)
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

  try {
    // const Rental = await PropertyRental.findByPk(rentID)
    const Rental = await PropertyRental.findAll({
      where: {
        id: rentID,
      },
    })
    // console.log(Rental[0])

    let startDate = Rental[0].dataValues.start_date
    let today = new Date()
    // console.log("startDate")
    // console.log(startDate)
    // console.log("today")
    // console.log(today)
    if (
      today !== undefined &&
      startDate !== undefined &&
      today !== null &&
      startDate !== null
    ) {
      function difference(date1, date2) {
        const date1utc = Date.UTC(
          date1.getFullYear(),
          date1.getMonth(),
          date1.getDate(),
        )
        const date2utc = Date.UTC(
          date2.getFullYear(),
          date2.getMonth(),
          date2.getDate(),
        )
        day = 1000 * 60 * 60 * 24
        return (date2utc - date1utc) / day
      }
      // Thiago
      const time_difference = difference(today, startDate)
      // console.log(time_difference)
      if (time_difference <= 10) {
        res.json({
          status: 401,
          message:
            "Error, the cancellation process can happen with an anticipation of 10+ days before the start date of the rent",
        })
      } else {
        if (!Rental) {
          res.json({ status: 400, message: "This Rent doesnt exists" })
        }
        if (Rental[0].dataValues.status === "active") {
          Rental[0].update({
            status: "cancelled",
          })
          await Rental[0].save()

          res.json({
            status: 200,
            message: "This property has been cancelled ",
          })
        } else if (Rental[0].dataValues.status === "cancelled") {
          res.json({
            status: 400,
            message: "This property is already cancelled ",
          })
        } else {
          res.json({ status: 400, message: "Error" })
        }
      }
    }
    // Thiago
  } catch (error) {
    next(error)
  }
}

const getMonthlyIncome = async (req, res, next) => {
  try {
    const incomes = await PropertyRental.findAll({
      attributes: [
        [sequelize.fn("SUM", sequelize.col("final_price")), "totalAmount"],
        [
          sequelize.fn("date_trunc", "month", sequelize.col("createdAt")),
          "rentedOn",
        ],
      ],
      where: { status: "active" },
      order: [[sequelize.literal('"rentedOn"'), "ASC"]],
      group: "rentedOn",
    })
    // await PropertyRental.sum("final_price", { where: { status: "active" } })

    res.json(incomes)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  addRental,
  getRental,
  getRentalsByUser,
  getAllRentals,
  cancelRental,
  getMonthlyIncome,
}
