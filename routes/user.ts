import { Request, Response } from 'express';

const express = require("express");

const router = express.Router();

router.get("/user", async (req: Request, res: Response) => {
    const { userId } = req.query;

    if (userId) {
        res.status(200).send(
            {
                userName: "William Lozano Kurir",
                userId: userId
            }
        )
    } else {
        res.send("No user ID");
    }
});

router.post("/user", async (req: Request, res: Response) => {
    const { userId, userName } = req.body;

    // Send user

    res.send("Waiting....");
});

module.exports = router;