import { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const express = require("express");
const helmet = require("helmet");
//const cors = require("cors");

// Add cors
var allowedOrigins = [""];

const app: Application = express();

app.use(helmet());

module.exports = app;