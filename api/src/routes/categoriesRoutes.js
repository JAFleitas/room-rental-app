const { Router } = require("express")

const {
  getAllCategories,
  addCategories,
} = require("../controllers/categoriesController")

const router = Router()

router.get("/getAllCategories", getAllCategories)

router.post("/addCategories", addCategories)

module.exports = router
