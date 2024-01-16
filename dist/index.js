"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = require("./app");
const port = process.env.PORT || 8000;
const routes = require("./routes/router");
app.use("/", routes);
// app.use("/api/", routes);  //for API backend
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
