const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const router = Router();

router.get('/', (req, res) => {
    // Get all users from database

    res.json(new SuccessResponseObject('user path live'))
});

/*
router.get('/:username', (req, res) => {
    const username = req.params.username;

    // Find in database, use username
    const user = "";

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: 'User not found.'
        });
    }
});
*/

router.post('/', (req, res) => {
    const user = req.body;

    // Insert in database

    res.status(201).json(user);
});

/*
router.delete('/:username', (req, res) => {
    const username = req.params.username;

    // Find in database, use username
    // Delete
    const user = "";

    // Check

    res.status(200).json({
        message: 'User deleted successfully'
    });
});
*/

module.exports = router;