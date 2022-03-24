const { Router } = require("express")
const auth = require("../middlewares/auth")

const {
  createUser,
  login,
  getUserDetail,
  resetPassword,
  forgotPassword,
  updateUser,
} = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/register", createUser)

// Facebook
userRouter.post("/login", login)

userRouter.get("/", auth, getUserDetail)

userRouter.put("/", auth, updateUser)

userRouter.put("/reset-password", auth,resetPassword)

userRouter.post("/forgot-password", forgotPassword)

userRouter.post("/loginGoogle", login)

module.exports = userRouter
