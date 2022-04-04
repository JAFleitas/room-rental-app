const { Router } = require("express")
const auth = require("../middlewares/auth")
const {
  createPaymentMethod,
  getAllPaymentMethodsByUser,
  updatePaymentMethod,
  deletePaymentMethod,
} = require("../controllers/paymentMethodController")
const { paymentStripe } = require("../controllers/stripeController")

const router = Router()

router.get("/", auth, getAllPaymentMethodsByUser)

router.post("/paymentStripe", auth, paymentStripe)

router.post("/", auth, createPaymentMethod)

router.put("/:id", auth, updatePaymentMethod)

router.delete("/:id", auth, deletePaymentMethod)

module.exports = router
