const { Router } = require("express")
const adminAuth = require("../middlewares/adminAuth")
const auth = require("../middlewares/auth")
const {contactController, sendPromotionalEmails} = require("../controllers/contactController")

const router = Router()

router.post("/", contactController)

router.post("/notification", auth,  adminAuth, sendPromotionalEmails)

module.exports = router