const Stripe = require("stripe")
const KEY_PRIVATE_STRIPE = process.env.KEY_PRIVATE_STRIPE
const { PropertyRental } = require("../db/index")
const stripe = new Stripe(KEY_PRIVATE_STRIPE)

const paymentStripe = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date, idPayment } =
    req.body

  if (userID) {
    if ((propertyID, final_price && final_date && start_date, idPayment)) {
      try {
        const payment = await stripe.paymentIntents.create({
          amount: final_price * 100,
          currency: "USD",
          description: "Rent Payment",
          payment_method: idPayment,
          confirm: true,
        })
        if (payment.status === "succeeded") {
          const newRental = await PropertyRental.create({
            userID,
            propertyID,
            final_price,
            start_date,
            final_date,
          })
          if (newRental) {
            res.send({
              title: "success",
              message: "Successful payments",
              status: "200",
            })
          } else {
            res.send({
              title: "Error!",
              message: "Rental not Created",
              status: "500",
            })
          }
        }
      } catch (error) {
        res.send({
          title: "Error!",
          message:
            error.payment_intent.last_payment_error.message ||
            "An error has occurred",
          status: "400",
        })
      }
    } else {
      res.status(404).json({ message: "Error Required Field not Found" })
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = {
  paymentStripe,
}
