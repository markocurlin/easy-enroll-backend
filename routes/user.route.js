const { Router } = require('express');
const userModel = require('../models/user');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find({}, { password: 0 });

        res.status(200).json(users);
    } catch(error) {
        res.status(400).json({error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const user = await userModel.findById(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: 'User not found.' });
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.get('/:username', async (req, res) => {
    const username = req.params.username;

    try {
        const user = await userModel.findOne({ username: username });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: 'User not found.' });
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.post('/', async (req, res) => {
    const user = req.body;

    const lastUser = await userModel.findOne({}, {}, { sort: { '_id': -1 } });
    let nextId = lastUser._id + 1;

    const newUser = new userModel({
        _id: nextId,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role
    });

    try {
        await newUser.save().then(savedUser => {
            console.log('User saved:', savedUser);
        });

        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await userModel.findById(id);

        res.status(200).json('User deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:username', async (req, res) => {
    const username = req.params.username;

    try {
        await userModel.findOneAndDelete({ username: username });

        res.status(200).json('User deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;