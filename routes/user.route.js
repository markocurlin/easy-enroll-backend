const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

module.exports = router;