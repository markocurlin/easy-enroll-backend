const { Router } = require('express');
const userModel = require('../models/user');

const router = Router();

router.post('/',  async (req, res) => {
    const user = req.body;

    try {
        const userDb = await userModel.findOne({ username: user.username, role: 'professor' });

        if (userDb) {
            let isUserValid = user.password === userDb.password;

            if (isUserValid) {
                res.status(200).json({
                    id: userDb._id,
                    firstName: userDb.firstName,
                    lastName: userDb.lastName,
                    username: userDb.username,
                    email: userDb.email,
                    role: userDb.role
                });
            } else {
                res.status(401).json({
                    message: 'Invalid password.'
                });
            }
        } else {
            res.status(404).json({error: 'User not found.' });
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;



