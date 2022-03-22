const { Router } = require("express")

const {
  getAllServices,
  addService,
} = require("../controllers/servicesController")

const router = Router()

router.get("/getAllServices", getAllServices)

router.post("/addService", addService)

module.exports = router
