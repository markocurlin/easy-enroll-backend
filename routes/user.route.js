const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const router = Router();

router.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

module.exports = router;