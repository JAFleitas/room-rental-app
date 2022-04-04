const Stripe = require("stripe")
const KEY_PRIVATE_STRIPE = process.env.KEY_PRIVATE_STRIPE

const stripe = new Stripe(KEY_PRIVATE_STRIPE)

const paymentStripe = async (req, res) => {
  const userID = req.user.id
  const { propertyID, final_price, start_date, final_date, idPayment } =
    req.body

  if (userID) {
    if ((propertyID, final_price && final_date && start_date, idPayment)) {
      try {
        const payment = await stripe.paymentIntents.create({
          amount: final_price,
          currency: "USD",
          description: "Pago por productos",
          payment_method: idPayment,
          confirm: true,
        })
        console.log(payment)
        res.send("Datos enviados")
      } catch (error) {
        console.log(error)
        res.sendStatus(404)
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
