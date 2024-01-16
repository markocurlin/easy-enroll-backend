const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const login = require('./login.route');
const user = require('./user.route');
const router = Router();

router.use('/login', login);

router.use('/user', user);

router.get('/', (req, res) => res.json(new SuccessResponseObject('Vercel deployment success')));

module.exports = router;