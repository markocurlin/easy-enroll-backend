"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express = require("express");
const helmet = require("helmet");
//const cors = require("cors");
// Add cors
var allowedOrigins = [""];
const app = express();
app.use(helmet());
module.exports = app;
