const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json(
    {
        userName: "William Lozano Kurir",
        userId: 69
    }
));

module.exports = router;