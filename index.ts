import { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = require("./app");
const port: string | number = process.env.PORT || 8000;
const routes = require("./routes/router");

app.use("/", routes);
// app.use("/api/", routes);  //for API backend

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
