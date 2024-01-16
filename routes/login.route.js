const { Router } = require('express');

const router = Router();

router.post('/', (req, res) => {
    const user = req.body;

    // Get user from database
    /*
    let userDb;

    if (userDb) {
        let isUserValid = user.password === userDb.password;
        
        if (isUserValid) {
            res.status(200).json({
                id: userDb.id,
                username: userDb.username,
                message: 'Login successful'
            });
        } else {
            res.status(401).json({
                message: 'Invalid password.'
            });
        }
    } else {
        res.status(404).json({
            message: 'User not found.'
        });
    }
    */
    res.status(201).json(user);
});