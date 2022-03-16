const { Router } = require("express")

const { 
      getPropertyById,
      addProperty,
} = require("../controllers/PropertyController")

const router = Router()

router.get("/getPropertyById/:id", getPropertyById)

router.post("/addProperty", addProperty)

module.exports = router
