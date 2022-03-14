import express, { Application } from "express";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
// importo los routes
// inicializo app
const app: Application = express();

// middlewares
dotenv.config();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes

export default app;
