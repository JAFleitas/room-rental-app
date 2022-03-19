/* eslint-disable no-unused-vars */
const express = require("express")
const logger = require("morgan")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const session = require("express-session")

// const propertyRouter = require("./routes/PropertyRoutes.js")
const routes = require("./routes/index.js")
const passport = require("passport")

require("./passport")(passport)

const app = express()
app.use(cors())
// view engine setup

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Indicamos que use sesiones, para almacenar el objeto usuario
// y que lo recuerde aunque abandonemos la página
app.use(session({ secret: process.env.APP_RENTAL }))

app.use(passport.initialize())
app.use(passport.session())
// Routes
app.use("/api", routes)
app.get("/auth/facebook", passport.authenticate("facebook"))
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
)
// catch 404 and forward to error handler
app.use("*", (req, res, next) => {
  next({ status: 404, message: "Page not found" })
})
// error handler
app.use(function (err, req, res, next) {
  console.log(err.name) // eslint-disable-line no-console
  if (err.message) return res.status(err.status || 500).send(err.message)
  res.sendStatus(500)
})

module.exports = app
