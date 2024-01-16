import { Request, Response } from 'express';

const express = require("express");

const router = express.Router();

const user = require("./user");

router.get("/", async (req: Request, res: Response) => {
    res.send("Home page");
});

router.use("/", user);

module.exports = router;