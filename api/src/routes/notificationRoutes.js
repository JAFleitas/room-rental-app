const { Router } = require("express")
const adminAuth = require("../middlewares/adminAuth")
const auth = require("../middlewares/auth")
const {
  sendPromotionalEmails,
  getAllPromotionalEmails,
} = require("../controllers/contactController")

const router = Router()

router.post("/", auth, adminAuth, sendPromotionalEmails);

router.get("/", auth, adminAuth, getAllPromotionalEmails);

module.exports = router
