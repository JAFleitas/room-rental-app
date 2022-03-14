"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// importo los routes
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const app = (0, express_1.default)();
// middlewares
dotenv.config();
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors());
// routes
exports.default = app;
