const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const user = require('./user.route');

const r = Router();

r.use('/user', user);

r.get('/', (req, res) => res.json(new SuccessResponseObject('Vercel deployment success')));

module.exports = r;