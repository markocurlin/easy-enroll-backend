const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const user = require('./user.route');

const router = Router();

router.use('/user', user);

router.get('/', (req, res) => res.json(new SuccessResponseObject('Vercel success')));

module.exports = router;