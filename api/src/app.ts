import express, { Application } from "express";
// importo los routes

const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const app: Application = express();

// middlewares
dotenv.config();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes

export default app;
