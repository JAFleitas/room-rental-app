const { Router } = require("express")
const auth = require("../middlewares/auth")

const {
  createUser,
  login,
  getUserDetail,
} = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

userRouter.post("/login", login)

userRouter.get("/", auth, getUserDetail)

module.exports = userRouter
