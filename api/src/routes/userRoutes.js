const { Router } = require("express")
const auth = require("../middlewares/auth")

const {
  createUser,
  login,
  getUserDetail,
} = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

// Facebook
userRouter.post("/login", login)

userRouter.get("/", auth, getUserDetail)

userRouter.post("/loginGoogle", login)

module.exports = userRouter
