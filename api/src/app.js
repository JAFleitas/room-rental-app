/* eslint-disable no-unused-vars */
const express = require("express")
const logger = require("morgan")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

const propertyRouter = require("./routes/PropertyRoutes.js")

const routes = require("./routes/index.js")

const app = express()
app.use(cors())
// view engine setup

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/properties", propertyRouter)

// catch 404 and forward to error handler
app.use("/", routes)
// error handler
app.use(function (err, req, res, next) {
  console.error(err)
  if (err.message) return res.status(err.status || 500).send(err.message)
  res.sendStatus(500)
})

module.exports = app
