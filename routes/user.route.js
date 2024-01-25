const { Router } = require('express');
const userModel = require('../models/user');
const presenceModel = require('../models/presence');

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
        await newUser.save();

        const newPresence = new presenceModel({
            studentId: nextId,
            present: false
        });

        await newPresence.save();

        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;

    try {
        await userModel.findByIdAndUpdate(id, user).then(editedUser => {
            res.status(200).json(editedUser);
        });
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await userModel.findByIdAndDelete(id);
        await presenceModel.findOneAndDelete({ studentId: id });

        res.status(200).json('User deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;