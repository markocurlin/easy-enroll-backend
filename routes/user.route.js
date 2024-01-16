const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.status(200).send(
        {
            userName: "William Lozano Kurir",
            userId: userId
        }
    )
});

router.post("/user", async (req, res) => {
    const { userId, userName } = req.body;

    // Send user

    res.send("Waiting....");
});

module.exports = router;