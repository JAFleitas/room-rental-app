const { Router } = require("express")

const {
  getPropertyById,
  addProperty,
  getAll,
} = require("../controllers/PropertyController")

const router = Router()

router.get("/getPropertyById/:id", getPropertyById)

router.post("/addProperty", addProperty)

router.get("/getPropertys", getAll)

module.exports = router
